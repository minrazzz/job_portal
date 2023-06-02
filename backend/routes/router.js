const express = require("express");
const {
  userRegister,
  userLogin,
  userLogout,
  userProfile,
} = require("../handlers/userHandler");
const { isAuthenticated } = require("../middleware/authenticate");
const Router = express.Router();
//api /register ||login|| logout
Router.post("/user/register", userRegister);
Router.post("/user/login", userLogin);
Router.get("/user/logout", userLogout);
Router.get("/me", isAuthenticated, userProfile);

module.exports = Router;
