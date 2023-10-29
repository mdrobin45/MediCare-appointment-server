const express = require("express");
const addSpeciality = require("../controllers/speciality/addSpeciality");
const getSpecialities = require("../controllers/speciality/getSpecialities");
const specialityRouter = express.Router();

// Get Specialities
specialityRouter.get("/", getSpecialities);

// Add Speciality
specialityRouter.post("/", addSpeciality);

module.exports = specialityRouter;
