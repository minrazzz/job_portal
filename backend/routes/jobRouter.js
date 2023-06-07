const express = require("express");
const { addJobs, getAllJobs, getSingleJob } = require("../handlers/jobHandler");
const { isAuthenticated } = require("../middleware/authenticate");
const Router = express.Router();

// api/add/jobs
Router.post("/add/jobs", isAuthenticated, addJobs);
// api/get/jobs
Router.get("/get/jobs", isAuthenticated, getAllJobs);
//api /get/job/id
Router.get("/get/job", isAuthenticated, getSingleJob);

module.exports = Router;
