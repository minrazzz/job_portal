const { jobTypeModel } = require("../models/jobTypeModel");

const createJobType = async (req, res, next) => {
  try {
    const jobT = await jobTypeModel.create({
      jobTypeName: req.body.jobTypeName,
      user: req.user.id,
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
    return res.json({
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
};
