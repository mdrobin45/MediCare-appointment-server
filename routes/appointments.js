const express = require("express");
const addAppointment = require("../controllers/appointments/addAppointment");
const getAppointment = require("../controllers/appointments/getAppointment");
const getAppointments = require("../controllers/appointments/getAppointments");
const getUserAppointments = require("../controllers/appointments/getUserAppointments");
const appointmentRoute = express.Router();

// Get user Appointments
appointmentRoute.get("/my-appointments", getUserAppointments);

// Get one Appointment
appointmentRoute.get("/:id", getAppointment);

// Get all Appointment
appointmentRoute.get("/", getAppointments);

// Add an appointment
appointmentRoute.post("/", addAppointment);

// Add multiple doctors
// appointmentRoute.post("/multiple", addMultipleDoctor);

module.exports = appointmentRoute;
