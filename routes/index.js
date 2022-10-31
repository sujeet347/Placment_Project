const express = require("express");
const routers = express.Router();

// user routes
routers.use("/", require("./users"));

// student routes
routers.use("/student", require("./students"));

module.exports = routers;
