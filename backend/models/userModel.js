const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
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
    role: {
      type: Number,
      default: 0,
    },
    token: {
      type: String,
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
