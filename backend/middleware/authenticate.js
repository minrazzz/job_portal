const ErrorResponse = require("../utils/errorResponse");
const jwt = require("jsonwebtoken");

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
    // console.log(tokenInfo.data.email);
    // console.log(tokenInfo);
    const user = await userModel.findOne({
      token,
      email: tokenInfo.data.email,
    });
    // console.log(user);
    if (!user) {
      return next(new ErrorResponse("user not found", 401));
    }
    req.user = user;

    next();
  } catch (error) {
    return next(error);
  }
};
module.exports = {
  isAuthenticated,
};
