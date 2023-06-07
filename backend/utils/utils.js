const fs = require("fs");
const path = require("path");
var jwt = require("jsonwebtoken");
const { userModel } = require("../models/userModel");
const { nextTick } = require("process");
const ErrorResponse = require("./errorResponse");
require("dotenv").config();

module.exports = {
  createToken: function (payload) {
    const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
      expiresIn: 36000,
    });
    return token;
  },
  //decode token
  verifyToken: async function (token, req) {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    return decoded;
  },
  //image validation
  validationImage: async function (mimetype, res) {
    try {
      if (!mimetype.startsWith("image")) {
        return next(new ErrorResponse("Invalid file format!!", 403))
      } else {
        return true
      }
    }
    catch (error) {
      console.log(error)
    }
  },
  imageUpload: async function (dir, imageFile) {
    try {
      let imageFileName = null
      const hashedFileName = imageFile.md5
      const extension = path.extname(imageFile.name)

      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir)
      }
      imageFileName = hashedFileName + extension
      // console.log(imageFileName)
      imageFile.mv(`${dir}/${imageFileName}`, function (err) {
        if(err){
          return next(new ErrorResponse("Something Went wrong",500))
        }
      })
      return imageFileName
    } catch (error) {
      console.log(error)
     

    }
  }
}
     
     













