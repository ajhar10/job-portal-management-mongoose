const Job = require("../models/Job");
const User = require("../models/User");

const createJobService = async data => {
	const job = await Job.create(data);

	// UPDATE JOB
	const { _id: jobId, manager } = product;

	const res = await User.updateOne(
		{ _id: manager.id },
		{ $push: { jobs: jobId } }
	);

	return job;
};

module.exports = { createJobService };
