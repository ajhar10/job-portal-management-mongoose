const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(cors());

// ROUTES

// ROUTES USE

app.get("/", (req, res) => {
	res.send("Route is working! YaY!");
});

// NOT FOUND ROUTE
app.all("*", (req, res) => {
	res.send("NO route found.");
});

module.exports = app;
