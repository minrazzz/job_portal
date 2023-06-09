const express = require("express");
const {
   allUsers,
   singleUser,
   editUser,
   deleteUser,
   createUserJobsHistory,
} = require("../handlers/userInfoHandler");
const { isAuthenticated, isAdmin } = require("../middleware/authenticate");
const Router = express.Router();
//api /register ||login|| logout

// /api/allUsers
Router.get("/allUsers", isAuthenticated, allUsers);
// /api/singleUser/id
Router.get("/singleUser/:id", isAuthenticated, singleUser);
// /api/user/edit/id
Router.put("/user/edit/:id", isAuthenticated, editUser);
// /api/admin/user/delete/id
Router.delete("/admin/user/delete/:id", isAuthenticated, isAdmin, deleteUser);
// /api/user/jobhistory
Router.post("/user/jobhistory", isAuthenticated, createUserJobsHistory);

module.exports = Router;
