const express = require("express");
const getDoctors = require("./routerFunctions/doctors/getDoctors");
const addOneDoctor = require("./routerFunctions/doctors/addOneDoctor");
const addMultipleDoctor = require("./routerFunctions/doctors/addMultipleDoctor");
const getOneDoctor = require("./routerFunctions/doctors/getOneDoctor");
const doctorsRouter = express.Router();

// Get all Doctors
doctorsRouter.get("/", (req, res) => {
   getDoctors(req, res);
});

// Get one Doctors
doctorsRouter.get("/:id", (req, res) => {
   getOneDoctor(req, res);
});

// Add a doctor
doctorsRouter.post("/", (req, res) => {
   addOneDoctor(req, res);
});

// Add a doctor
doctorsRouter.post("/multiple", (req, res) => {
   addMultipleDoctor(req, res);
});

module.exports = doctorsRouter;
