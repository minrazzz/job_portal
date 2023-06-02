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

  verifyToken: async function (token, req) {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    // req.user = await userModel.findById(decoded.id);
    return decoded;
  },
};
