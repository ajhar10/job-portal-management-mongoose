const mongoose = require("mongoose");
const validator = require("validator");
const { ObjectId } = mongoose.Schema.Types;

const jobSchema = mongoose.Schema(
	{
		title: {
			type: String,
			required: [true, "Please provide a title for this product."],
			trim: true,
			unique: false,
			lowercase: true,
			minLenght: [3, "title must be al last 3 characters."],
			maxLenght: [100, "title is too large"],
		},
		email: {
			type: String,
			validate: [validator.isEmail, "Provide a valid Email"],
			trim: true,
			lowercase: true,
		},
		description: {
			type: String,
			required: true,
		},
		status: {
			type: String,
			enum: {
				values: ["full-time", "part-time", "project-base"],
				message: "status can't be {VALUE}",
			},
		},
		salary: {
			type: Number,
			required: true,
			min: [0, "Job price can't be nagetive"],
		},
		location: {
			type: String,
			required: [true, "Please provide your job location"],
		},
		role: {
			type: String,
			enum: ["hr", "candidate", "admin"],
			default: "hr",
		},
		applyURL: {
			type: String,
			validate: [validator.isURL, "Please provide a valid url"],
		},
		manager: {
			name: String,
			id: {
				type: ObjectId,
				ref: "User",
			},
		},
	},
	{
		timestamps: true,
	}
);

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
