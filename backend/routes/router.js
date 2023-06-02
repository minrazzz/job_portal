const express = require("express");
const {
  userRegister,
  userLogin,
  userLogout,
} = require("../handlers/userHandler");
const Router = express.Router();
//api /register ||login|| logout
Router.post("/user/register", userRegister);
Router.post("/user/login", userLogin);
Router.get("/user/logout", userLogout);

module.exports = Router;
