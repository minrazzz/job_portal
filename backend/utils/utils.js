var jwt = require("jsonwebtoken");
const { userModel } = require("../models/userModel");
const { nextTick } = require("process");
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
};
