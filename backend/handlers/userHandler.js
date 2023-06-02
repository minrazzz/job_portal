const { userModel } = require("../models/userModel");
const ErrorResponse = require("../utils/errorResponse");
const { createToken } = require("../utils/utils");
//user-Register api
const userRegister = async (req, res, next) => {
  try {
    const body = req.body;
    const userExists = await userModel.findOne({ email: body.email });
    if (userExists) {
      return next(new ErrorResponse("Email is already registered!", 400));
    }
    const user = new userModel({
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      password: body.password,
      role: body.role,
    });
    await user.save();
    res.status(201).json({
      success: true,
      user,
    });
  } catch (error) {
    next(error);
  }
};
//user-loginapi
const userLogin = async (req, res, next) => {
  try {
    const body = req.body;
    //email-compare
    const user = await userModel.findOne({ email: body.email });
    if (!user) {
      return next(new ErrorResponse("Invalid Credentials", 400));
    }

    //password-compare
    const isMatched = await user.comparePassword(body.password);
    if (!isMatched) {
      return next(new ErrorResponse("Invalid Credentials", 400));
    }
    // createtoken;
    const token = createToken({
      data: {
        user_id: user._id,
        name: user.name,
        email: user.email,
      },
    });
    user.token = token;
    res.cookie("auth", token, { maxAge: 60 * 60 * 1000 });
    await user.save();

    res.json({
      success: true,
      data: {
        token,
        user_id: user.id,

        email: user.email,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

//Logout
const userLogout = (req, res) => {
  res.clearCookie("auth");
  res.status(200).json({
    success: true,
    message: "logged out",
  });
};

//profile_info
const userProfile = async (req, res, next) => {
  try {
    const user = await userModel.findOne(req.user._id).select("-password");

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {}
};

module.exports = {
  userRegister,
  userLogin,
  userLogout,
  userProfile,
};
