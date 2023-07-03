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
         type: "normal",
      });
      await user.save();
      res.status(201).json({
         success: true,
         user,
      });
   } catch (error) {
      console.log(error);
   }
};
//user-loginapi
const userLogin = async (req, res, next) => {
   try {
      const body = req.body;
      //email-compare
      const user = await userModel.findOne({ email: body.email });
      if (!user) {
         return next(new ErrorResponse("Inavlid credentials", 401));
      }

      //password-compare
      const isMatched = await user.comparePassword(body.password);
      if (!isMatched) {
         return next(new ErrorResponse("Inavlid credentials", 401));
      }
      // createtoken;
      const token = await createToken({
         data: {
            user_id: user._id,
            name: user.firstName,
            email: user.email,
         },
      });
      user.token = token;
      await user.save();
      res.cookie("auth ", token, { maxAge: 60 * 60 * 1000 });
      res.json({
         success: true,
         role: user.role,
      });
   } catch (error) {
      console.log(error);
      next(error);
   }
};

//google-login
const googleLogin = async (req, res, next) => {
   try {
      const body = req.body;

      let user = await userModel.findOne({ email: body.email });
      if (user && user.type === "normal") {
         return next(new ErrorResponse("Email is already registered!", 400));
      }

      if (!user) {
         user = new userModel({
            firstName: body.firstName,
            lastName: body.lastName,
            email: body.email,
            password: body.googleId,
            role: body.role,
            type: "google",
         });
      }
      // createtoken;
      const token = await createToken({
         data: {
            user_id: user._id,
            name: user.firstName,
            email: user.email,
         },
      });
      user.token = token;
      await user.save();
      res.cookie("auth ", token, { maxAge: 60 * 60 * 1000 });
      res.json({
         success: true,
         role: user.role,
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
      console.log(req.user);
      const user = await userModel.findOne(req.user._id).select("-password");

      if (!user) {
         res.status(404).json({
            success: false,
            error: "unable to find the profile",
         });
      }

      res.status(200).json({
         success: true,
         user,
      });
   } catch (error) {
      return next(error);
   }
};

module.exports = {
   userRegister,
   userLogin,
   userLogout,
   userProfile,
   googleLogin,
};
