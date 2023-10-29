const express = require("express");
const getDoctors = require("./routerFunctions/doctors/getDoctors");
const addOneDoctor = require("./routerFunctions/doctors/addOneDoctor");
const addMultipleDoctor = require("./routerFunctions/doctors/addMultipleDoctor");
const getOneDoctor = require("./routerFunctions/doctors/getOneDoctor");
const doctorsRouter = express.Router();

// Get all Doctors
doctorsRouter.get("/", getDoctors);

// Get one Doctors
doctorsRouter.get("/:id", getOneDoctor);

// Add a doctor
doctorsRouter.post("/", addOneDoctor);

// Add multiple doctors
doctorsRouter.post("/multiple", addMultipleDoctor);

module.exports = doctorsRouter;
