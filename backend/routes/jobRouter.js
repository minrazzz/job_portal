const express = require("express");
const {
   addJobs,
   getAllJobs,
   getSingleJob,
   editSingleJob,
} = require("../handlers/jobHandler");
const { isAuthenticated, isAdmin } = require("../middleware/authenticate");
const Router = express.Router();

// api/add/jobs
Router.post("/add/jobs", isAuthenticated, isAdmin, addJobs);
// api/get/jobs
Router.get("/get/all-jobs", isAuthenticated, getAllJobs);
//api /get/job/id
Router.get("/get/single-job/:id", isAuthenticated, getSingleJob);
// api/edit/single-job
Router.put("/edit/single-job/:id", isAuthenticated, isAdmin, editSingleJob);

module.exports = Router;
