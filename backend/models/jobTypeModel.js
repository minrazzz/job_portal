const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const jobTypeSchema = new mongoose.Schema(
  {
    jobTypeName: {
      type: String,
      required: [true, "job category is required"],
      maxLength: 70,
    },

    user: {
      type: ObjectId,
      trim: true,
      ref: "user",
      required: true,
    },
  },

  { timestamps: true }
);

const jobTypeModel = new mongoose.model("jobType", jobTypeSchema);

module.exports = {
  jobTypeModel,
};
