const express = require("express");
const { getJobs } = require("../controllers/candidate.controller");
const router = express.Router();

router.get("/", getJobs);

module.exports = router;
