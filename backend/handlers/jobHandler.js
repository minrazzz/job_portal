const { jobModel } = require("../models/jobModel");

const fs = require("fs");
const { validationImage, imageUpload } = require("../utils/utils");

const { jobTypeModel } = require("../models/jobTypeModel");

//create-jobs
const addJobs = async (req, res, next) => {
   try {
      const body = req.body;
      const imageFile = req.files.resume;

      if (!validationImage(imageFile.mimetype, res)) {
         res.status(406).json({
            success: false,
            error: "invalid file format",
         });
      }
      const imageFileName = await imageUpload("uploads", imageFile);
      const job = await new jobModel({
         title: body.title,
         description: body.description,
         salary: body.salary,
         location: body.location,
         jobType: body.jobType,
         user: req.user.id,
         resume: "uploads/" + imageFileName,
      });

      await job.save();
      res.status(201).json({
         success: true,
         job,
      });
   } catch (error) {
      console.log(error);
      next(error);
   }
};

//getAllJob
const getAllJobs = async (req, res, next) => {
   // enable search-keyword
   const keyword = req.query.keyword
      ? {
           title: {
              $regex: req.query.keyword,
              $options: "i",
           },
        }
      : {};

   //filter jobs by ids
   let ids = [];
   const jobTypeCategory = await jobTypeModel.find({}, { _id: 1 });
   // console.log(jobTypeCategory);
   jobTypeCategory.forEach((cat) => {
      ids.push(cat._id);
   });
   let cat = req.query.cat || "";
   let categ = cat !== "" ? cat : ids;

   //filter by location
   const locations = [];
   const jobByLocation = await jobModel.find({}, { location: 1 });
   jobByLocation.forEach((val) => {
      locations.push(val.location);
   });
   //to fix the same location issue
   let setUniqueLocation = [...new Set(locations)];
   let location = req.query.location || "";
   let locationFilter = location !== "" ? location : setUniqueLocation;

   //enable Pagination
   const pageSize = 5;
   const page = Number(req.query.pageNumber) || 1;
   // const count = await jobModel.find().estimatedDocumentCount();
   const count = await jobModel
      .find({
         ...(keyword || {}),
         jobType: { $in: categ },
         location: { $in: locationFilter },
      })
      .countDocuments();
   try {
      const jobs = await jobModel
         .find({
            ...keyword,
            jobType: { $in: categ },
            location: { $in: locationFilter },
         })
         .populate("jobType", "jobTypeName")
         .sort({ createdAt: -1 })
         .skip(page > 0 ? (page - 1) * pageSize : 0)
         .limit(pageSize);

      if (!jobs) {
         res.status(404).json({
            success: false,
            error: "jobs not found",
         });
      }

      res.status(201).json({
         jobs,
         page,
         pages: Math.ceil(count / pageSize),
         count,
         ids,
         setUniqueLocation,
      });
      console.log(jobs);
   } catch (error) {
      console.log(error);
   }
};

//getsingleJob(by-id)
const getSingleJob = async (req, res, next) => {
   try {
      const id = req.params.id;
      const job = await jobModel.findById(id);
      if (!job) {
         res.status(404).json({
            success: false,
            error: "id not matched",
         });
      }
      res.status(200).json({
         success: true,
         job,
      });
   } catch (error) {
      console.log(error);
   }
};
//editJob(by-id)
const editSingleJob = async (req, res, next) => {
   try {
      body = req.body;
      const id = req.params.id;
      const job = await jobModel
         .findByIdAndUpdate(id, req.body, { new: true })
         .populate("jobType", "jobTypeName")
         .populate("user", "firstName lastName");
      if (!job) {
         res.status(404).json({
            success: false,
            error: "single job not found!!",
         });
      }

      if (req.files && req.files.resume) {
         //   console.log(job)
         let imageFileName = null;
         const imageFile = req.files.resume;
         // console.log(imageFile)
         if (!validationImage(imageFile.mimetype, res)) {
            res.status(401).json({
               success: false,
               error: "invalid file format,must be an image file",
            });
         }

         fs.unlink(job.resume, function (err) {
            if (err) {
               return;
            }
         });

         imageFileName = await imageUpload("uploads", imageFile);
         job.resume = req.files.resume
            ? `uploads/${imageFileName}`
            : job.resume;
      }
      await job.save();
      return res.status(200).json({
         success: true,
         job,
      });
   } catch (error) {
      console.log(error);
      next(error);
   }
};

module.exports = {
   addJobs,
   getAllJobs,
   getSingleJob,
   editSingleJob,
};
