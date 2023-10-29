const express = require("express");
const getDoctors = require("../controllers/doctors/getDoctors");
const getOneDoctor = require("../controllers/doctors/getOneDoctor");
const addOneDoctor = require("../controllers/doctors/addOneDoctor");
const addMultipleDoctor = require("../controllers/doctors/addMultipleDoctor");
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
