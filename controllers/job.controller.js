const { createJobService } = require("../services/job.services");

const createJob = async (req, res) => {
	try {
		const result = await createJobService(req.body);

		res.status(200).json({
			status: "success",
			message: "Data inserted successfully",
			data: result,
		});
	} catch (error) {
		res.status(400).json({
			status: "Failed",
			message: "Data is't inserted",
			error: error.message,
		});
	}
};

module.exports = { createJob };
