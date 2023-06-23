const { userModel } = require("../models/userModel");
const ErrorResponse = require("../utils/errorResponse");
const { createToken } = require("../utils/utils");

//loading all usersInfo
const allUsers = async (req, res, next) => {
   //pagination
   const pageSize = 10;
   const page = Number(req.query.pageNumber) || 1;
   const count = await userModel.find({}).estimatedDocumentCount();
   try {
      const users = await userModel
         .find()
         .sort({ createdAt: -1 })
         .select("-password")
         .skip(pageSize * (page - 1))
         .limit(pageSize);
      if (!users) {
         res.status(404).json({
            success: false,
            error: "unable to find the users' details",
         });
      }
      res.status(200).json({
         success: true,
         users,
         page,
         pages: Math.ceil(count / pageSize),
         count,
      });

      next();
   } catch (error) {
      return next(error);
   }
};
//loading single user
const singleUser = async (req, res, next) => {
   try {
      const user = await userModel.findById(req.params.id);

      if (!user) {
         res.status(404).json({
            success: false,
            error: "error while finding single user",
         });
      }
      res.status(200).json({
         success: true,
         user,
      });
   } catch (error) {
      console.log(error);
   }
};

const editUser = async (req, res, next) => {
   try {
      const user = await userModel.findByIdAndUpdate(req.params.id, req.body, {
         new: true,
      });
      if (!user) {
         res.status(401).json({
            success: false,
            error: "invalid id for editUser",
         });
      }
      res.status(200).json({
         success: true,
         user,
      });
   } catch (error) {
      console.log(error);
   }
};

const deleteUser = async (req, res, next) => {
   try {
      const user = await userModel.findByIdAndDelete(req.params.id);

      res.status(200).json({
         success: true,
         message: "user deleted succesfully",
      });
   } catch (error) {
      console.log(error);
   }
};
const createUserJobsHistory = async (req, res) => {
   try {
      const { title, description, salary, location } = req.body;
      const currentUser = await userModel.findOne({ _id: req.user._id });
      if (!currentUser) {
         res.status(401).json({
            success: false,
            error: "user is not logged in!!",
         });
      }
      const addJobHistory = {
         title,
         description,
         salary,
         location,
         user: req.user._id,
      };
      await currentUser.jobHistory.push(addJobHistory);
      await currentUser.save();
      res.status(200).json({
         success: true,
         currentUser,
      });
   } catch (error) {
      console.log(error);
   }
};

module.exports = {
   allUsers,
   singleUser,
   editUser,
   deleteUser,
   createUserJobsHistory,
};
