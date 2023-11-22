const express = require("express");
const addAppointment = require("../controllers/appointments/addAppointment");
const getAppointment = require("../controllers/appointments/getAppointment");
const getAppointments = require("../controllers/appointments/getAppointments");
const authUser = require("../middlewares/authUser");
const getPatientAppointments = require("../controllers/appointments/getPatientAppointments");
const getDoctorsAppointment = require("../controllers/appointments/getDoctorsAppointment");
const appointmentRoute = express.Router();

// Get patient Appointments
appointmentRoute.get("/patient", authUser, getPatientAppointments);

// Get patient Appointments
appointmentRoute.get("/doctor", authUser, getDoctorsAppointment);

// Get one Appointment
appointmentRoute.get("/:id", getAppointment);

// Get all Appointment
appointmentRoute.get("/", getAppointments);

// Add an appointment
appointmentRoute.post("/", addAppointment);

// Add multiple doctors
// appointmentRoute.post("/multiple", addMultipleDoctor);

module.exports = appointmentRoute;
