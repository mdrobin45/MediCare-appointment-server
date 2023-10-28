const express = require("express");
const token = require("./routerFunctions/token");
const getDoctors = require("./routerFunctions/doctors/getDoctors");
const addDoctor = require("./routerFunctions/doctors/addDoctor");
const addSpeciality = require("./routerFunctions/speciality/addSpeciality");
const rootRouter = express.Router();

// Token generate
rootRouter.post("/token", async (req, res) => {
   token(req, res);
});

module.exports = rootRouter;
