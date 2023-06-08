const express = require("express");
const Router = express.Router();
const { isAuthenticated, isAdmin } = require("../middleware/authenticate");
const {
   createJobType,
   allJobsType,
   updateJobType,
   deleteJobType,
} = require("../handlers/jobTypeHandler");

//api/type/create
Router.post("/type/create", isAuthenticated, isAdmin, createJobType);
// api/type/jobs
Router.get("/type/jobs", allJobsType);
// api/type/update/id
Router.put("/type/update/:id", isAuthenticated, isAdmin, updateJobType);
Router.delete("/type/delete/:id", isAuthenticated, isAdmin, deleteJobType);

module.exports = Router;
