const express = require("express");
const addAppointment = require("../controllers/appointments/addAppointment");
const getAppointment = require("../controllers/appointments/getAppointment");
const getAppointments = require("../controllers/appointments/getAppointments");
const verifyToken = require("../middlewares/verifyToken");
const getPatientAppointments = require("../controllers/appointments/getPatientAppointments");
const getDoctorsAppointment = require("../controllers/appointments/getDoctorsAppointment");
const updateStatus = require("../controllers/appointments/updateStatus");
const verifyRole = require("../middlewares/verifyRole");
const appointmentRoute = express.Router();

// Get patient Appointments
appointmentRoute.get("/patient", verifyToken, getPatientAppointments);

// Get doctor Appointments
appointmentRoute.get(
   "/doctor",
   verifyToken,
   verifyRole(["doctor"]),
   getDoctorsAppointment
);

// Get one Appointment
appointmentRoute.get("/:id", getAppointment);

// Get all Appointment
appointmentRoute.get("/", getAppointments);

// Add an appointment
appointmentRoute.post("/", verifyToken, addAppointment);

// update appointment status
appointmentRoute.put("/update/:id", verifyToken, updateStatus);

// Add multiple doctors
// appointmentRoute.post("/multiple", addMultipleDoctor);

module.exports = appointmentRoute;
