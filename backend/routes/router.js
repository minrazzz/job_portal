const express = require("express");
const {
   userRegister,
   userLogin,
   userLogout,
   userProfile,
   googleLogin,
} = require("../handlers/userHandler");
const { isAuthenticated } = require("../middleware/authenticate");
const Router = express.Router();

// /api/register
Router.post("/register", userRegister);
// /api/login
Router.post("/login", userLogin);
//api/google-login
Router.post("/google-login", googleLogin);
// /api/logout
Router.get("/logout", userLogout);
// /api/profile
Router.get("/profile", isAuthenticated, userProfile);

module.exports = Router;
