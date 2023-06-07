const { jobModel } = require("../models/jobModel");

const fs = require("fs");
const { validationImage, imageUpload } = require("../utils/utils");
const ErrorResponse = require("../utils/errorResponse");
const { jobTypeModel } = require("../models/jobTypeModel");

//create-jobs
const addJobs = async (req, res, next) => {
   try {
      const body = req.body;
      const imageFile = req.files.resume;

      if (!validationImage(imageFile.mimetype, res)) return false;
      const imageFileName = await imageUpload("uploads", imageFile);
      const job = await jobModel.create({
         title: body.title,
         description: body.description,
         salary: body.salary,
         location: body.location,
         jobType: body.jobType,
         user: req.user.id,
         resume: "uploads/" + imageFileName,
      });
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
   jobTypeCategory.forEach((cat) => {
      ids.push(cat.id);
   });
   console.log(ids);
   let cat = req.query.cat || "";
   let categ = cat !== "" ? cat : ids;
   //enable Pagination
   const pageSize = 3;
   const page = Number(req.query.pageNumber) || 1;
   // const count = await jobModel.find().estimatedDocumentCount();
   const count = await jobModel
      .find({ ...keyword, jobType: { $in: categ } })
      .countDocuments();
   try {
      const jobs = await jobModel
         .find({ ...keyword, jobType: { $in: categ } })
         .sort({ createdAt: -1 })
         .skip(pageSize * (page - 1))
         .limit(pageSize);
      res.status(201).json({
         jobs,
         page,
         pages: Math.ceil(count / pageSize),
         count,
         ids,
      });
   } catch (error) {
      console.log(error);
      next(error);
   }
};

//getsingleJob(by-id)
const getSingleJob = async (req, res, next) => {
   try {
      const id = req.params.id;
      const job = await jobModel.findById(id);
      if (!job) {
         return next(new ErrorResponse("Id not match", 404));
      }
      res.status(200).json({
         success: true,
         job,
      });
   } catch (error) {
      console.log(error);
      next(error);
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
      if (!job) return next(new ErrorResponse("id not found", 404));
      //   console.log(job)
      if (req.files && req.files.resume) {
         let imageFileName = null;
         const imageFile = req.files.resume;
         // console.log(imageFile)
         if (!validationImage(imageFile.mimetype, res)) {
            return next(new ErrorResponse("invalid file format", 406));
         }
         console.log(job.resume);
         fs.unlink(job.resume, function (err) {
            if (err) {
               return;
            }
         });

         imageFileName = await imageUpload("uploads", imageFile);
         job.resume = imageFileName ? `uploads/${imageFileName}` : null;
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