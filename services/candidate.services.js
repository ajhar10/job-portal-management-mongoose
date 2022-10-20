const Job = require("../models/Job");

const getJobsService = async (filters, queries) => {
	const { skip, limit, fields, sortBy } = queries;

	const jobs = await Job.find(filters)
		.skip(skip)
		.limit(limit)
		.select(fields)
		.sort(sortBy);

	const totalJobs = await Job.countDocuments(filters);
	const pageCount = Math.ceil(totalJobs / limit);

	return { totalJobs, pageCount, jobs };
};

module.exports = { getJobsService };
