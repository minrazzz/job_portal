const { jobTypeModel } = require("../models/jobTypeModel");
const ErrorResponse = require("../utils/errorResponse");

const createJobType = async (req, res, next) => {
   try {
      const jobT = await jobTypeModel.create({
         jobTypeName: req.body.jobTypeName,
         user: req.user._id,
      });

      res.status(201).json({
         success: true,
         jobT,
      });
   } catch (error) {
      console.log(error);
      next(error);
   }
};
//get all jobs category
const allJobsType = async (req, res, next) => {
   try {
      const jobT = await jobTypeModel.find();
      if (!jobT) {
         res.status(404).json({
            success: false,
            error: "jobsType not found!!!",
         });
      }
      return res.status(200).json({
         success: true,
         jobT,
      });
   } catch (error) {
      console.log(error);
      next(error);
   }
};
// update job-type
const updateJobType = async (req, res, next) => {
   try {
      const id = req.params.id;
      const jobT = await jobTypeModel.findByIdAndUpdate(id, req.body, {
         new: true,
      });
      return res.status(200).json({
         success: true,
         jobT,
      });
   } catch (error) {
      console.log(error);
      next(error);
   }
};
// delete jobType
const deleteJobType = async (req, res, next) => {
   try {
      const id = req.params.id;
      const jobT = await jobTypeModel.findByIdAndDelete(id);

      return res.status(200).json({
         success: true,
         jobT,
      });
   } catch (error) {
      console.log(error);
      next(error);
   }
};

module.exports = {
   createJobType,
   allJobsType,
   updateJobType,
   deleteJobType,
};
