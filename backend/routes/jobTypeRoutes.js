const express = require("express");
const Router = express.Router();
const { isAuthenticated, isAdmin } = require("../middleware/authenticate");
const { createJobType, allJobsType } = require("../handlers/jobTypeHandler");

//api/type/create
Router.post("/type/create", isAuthenticated, createJobType);
// api/type/jobs
Router.get("/type/jobs", allJobsType);

module.exports = Router;
