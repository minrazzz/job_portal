const express = require("express");
const {
   addJobs,
   getAllJobs,
   getSingleJob,
   editSingleJob,
   deleteJob,
} = require("../handlers/jobHandler");
const { isAuthenticated, isAdmin } = require("../middleware/authenticate");
const { createUserJobsHistory } = require("../handlers/userInfoHandler");
const Router = express.Router();

// api/add/jobs
Router.post("/add/jobs", isAuthenticated, addJobs);
// api/get/all-jobs
Router.get("/get/all-jobs", getAllJobs);
//api /get/job/id/${id}
Router.get("/get/single-job/:id", getSingleJob);
// api/edit/single-job/${id}
Router.put("/edit/single-job/:id", isAuthenticated, isAdmin, editSingleJob);
// api/user/jobhistory
Router.post("/user/jobhistory", isAuthenticated, createUserJobsHistory);
//api/admin/job/delete/:id
Router.delete("/admin/job/delete/:id", isAuthenticated, isAdmin, deleteJob);

module.exports = Router;
