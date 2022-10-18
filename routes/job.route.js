const express = require("express");
const verifyToken = require("../middlewares/verifyToken");
const authorization = require("../middlewares/authorization");
const { createJob } = require("../controllers/job.controller");
const router = express.Router();

router.post("/jobs", verifyToken, authorization("hr"), createJob);

module.exports = router;
