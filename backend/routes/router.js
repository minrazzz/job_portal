const express = require("express");
const { signing } = require("../handlers/userHandler");
const router = express.Router();

//auth routes
router.get("/", signing);
module.exports = router;
