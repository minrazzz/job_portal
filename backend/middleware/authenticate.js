const ErrorResponse = require("../utils/errorResponse");
const { verifyToken } = require("../utils/utils");
const { userModel } = require("../models/userModel");

//check if user is authenticated
const isAuthenticated = async (req, res, next) => {
   const token = req.headers["Authorization"] || req.cookies.auth;
   try {
      if (!token) {
         return next(new ErrorResponse("token not found", 401));
      }
      const tokenInfo = await verifyToken(token);
      const user = await userModel.findOne({ email: tokenInfo.data.email });
      // console.log(tokenInfo);

      if (!user) {
         return next(new ErrorResponse("user not found", 401));
      }
      req.user = user;

      next();
   } catch (error) {
      return next(error);
   }
};

//authorization
const isAdmin = (req, res, next) => {
   try {
      if (req.user.role === 0) {
         return next(
            new ErrorResponse("Access denied,you must be an admin", 401)
         );
      }
      next();
   } catch (error) {
      next(error);
   }
};
module.exports = {
   isAuthenticated,
   isAdmin,
};
