const express = require("express");
const addSpeciality = require("../controllers/speciality/addSpeciality");
const specialityRouter = express.Router();

// Add Speciality
specialityRouter.post("/", addSpeciality);

module.exports = specialityRouter;
