var jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = {
  createToken: function (payload) {
    const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
      expiresIn: 36000,
    });
    return token;
  },

  verifyToken: function (token) {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    console.log(decoded);
    return decoded;
  },
};
