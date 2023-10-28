const express = require("express");
const token = require("./routerFunctions/token");
const getDoctors = require("./routerFunctions/doctors/getDoctors");
const addDoctor = require("./routerFunctions/doctors/addDoctor");
const addSpeciality = require("./routerFunctions/addSpeciality");
const router = express.Router();

// Token generate
router.post("/token", async (req, res) => {
   token(req, res);
});

// Add category
router.post("/speciality", (req, res) => {
   addSpeciality(req, res);
});
// Get Doctors
router.get("/doctors", (req, res) => {
   getDoctors(req, res);
});

// Add new doctor
router.post("/doctors", (req, res) => {
   addDoctor(req, res);
});

module.exports = router;
