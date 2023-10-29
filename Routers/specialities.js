const express = require("express");
const addSpeciality = require("./routerFunctions/speciality/addSpeciality");
const specialityRouter = express.Router();

// Add Speciality
specialityRouter.post("/", addSpeciality);

module.exports = specialityRouter;
