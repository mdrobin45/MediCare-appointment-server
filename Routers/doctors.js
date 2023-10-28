const express = require("express");
const getDoctors = require("./routerFunctions/doctors/getDoctors");
const addDoctor = require("./routerFunctions/doctors/addDoctor");
const doctorsRouter = express.Router();

// Get all Doctors
doctorsRouter.get("/", (req, res) => {
   getDoctors(req, res);
});

// Add a doctor
doctorsRouter.post("/", (req, res) => {
   addDoctor(req, res);
});

module.exports = doctorsRouter;
