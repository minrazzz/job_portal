const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "title is required"],
      maxLength: 70,
    },
    description: {
      type: String,
      required: [true, "description is required"],
    },
    salary: {
      type: String,
      required: [true, "salary is required"],
    },
    location: {
      type: String,
    },
    resume: {
      type: String,
    },
    available: {
      type: Boolean,
      default: true,
    },
    jobType: {
      type: ObjectId,
      ref: "jobType",
      required: true,
    },
    user: {
      type: ObjectId,
      ref: "user",
      required: true,
    },
  },

  { timestamps: true }
);

const jobModel = new mongoose.model("job", jobSchema);
module.exports = {
  jobModel,
};
