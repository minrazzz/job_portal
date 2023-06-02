const { userModel } = require("../models/userModel");
const ErrorResponse = require("../utils/errorResponse");

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
    res.status(401).json({
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
      return next(new ErrorResponse("Invalid id", 400));
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
      return next(new ErrorResponse("Invalid id", 401));
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
      user,
    });
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  allUsers,
  singleUser,
  editUser,
};
