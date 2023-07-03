const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { ObjectId } = mongoose.Schema;

const jobHistorySchema = new mongoose.Schema(
   {
      title: {
         type: String,

         maxLength: 70,
      },
      description: {
         type: String,
      },
      salary: {
         type: String,
      },
      location: {
         type: String,
      },
      resume: {
         type: String,
      },
      interviewdate: {
         type: Date,
      },
      applicationStatus: {
         type: String,
         enum: ["pending", "accepted", "rejected"],
         default: "pending",
      },

      user: {
         type: ObjectId,
         ref: "user",
         required: true,
      },
   },

   { timestamps: true }
);
const userSchema = new mongoose.Schema(
   {
      firstName: {
         type: String,
         required: [true, "first name is required"],
         maxLength: 32,
      },
      lastName: {
         type: String,
         trim: true,
         required: [true, "last name is required"],
         maxLength: 32,
      },
      email: {
         type: String,
         trim: true,
         required: [true, "email is required"],
      },
      password: {
         type: String,
         trim: true,
         required: [true, "password is required"],
         minLength: [6, "password must have at least (6) characters"],
      },
      jobHistory: [jobHistorySchema],

      role: {
         type: Number,
         default: 0,
      },
      token: {
         type: String,
      },
      type: {
         type: String,
         enum: ["normal", "google"],
         default: "normal",
      },
   },
   { timestamps: true }
);

//encrypt password before saving
userSchema.pre("save", async function (next) {
   if (this.isModified("password")) {
      const hash = await bcrypt.hash(this.password, 8);
      this.password = hash;
   }
   next();
});

//compare password
userSchema.methods.comparePassword = async function (password) {
   const result = await bcrypt.compare(password, this.password);
   return result;
};

const userModel = new mongoose.model("user", userSchema);

module.exports = {
   userModel,
};
