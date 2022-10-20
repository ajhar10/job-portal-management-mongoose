const express = require("express");
const verifyToken = require("../middlewares/verifyToken");
const authorization = require("../middlewares/authorization");
const {
	createJob,
	getJobDetailsById,
} = require("../controllers/job.controller");
const router = express.Router();

router.post("/jobs", verifyToken, authorization("hr"), createJob);
router.get("/manager/jobs/:id", verifyToken, getJobDetailsById);

module.exports = router;
