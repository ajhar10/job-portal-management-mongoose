const Job = require("../models/Job");
const User = require("../models/User");

const createJobService = async data => await Job.create(data);

const getJobDetailsByIdService = async id => await Job.findById({ _id: id });

module.exports = { createJobService, getJobDetailsByIdService };
