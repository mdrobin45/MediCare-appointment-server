const express = require("express");
const addAppointment = require("../controllers/appointments/addAppointment");
const getAppointment = require("../controllers/appointments/getAppointment");
const getAppointments = require("../controllers/appointments/getAppointments");
const appointmentRoute = express.Router();

// Get all Doctors
appointmentRoute.get("/", getAppointments);

// Get one Doctors
appointmentRoute.get("/:id", getAppointment);

// Add a doctor
appointmentRoute.post("/", addAppointment);

// Add multiple doctors
// appointmentRoute.post("/multiple", addMultipleDoctor);

module.exports = appointmentRoute;
