const express = require("express");
const addAppointment = require("../controllers/appointments/addAppointment");
const getAppointment = require("../controllers/appointments/getAppointment");
const getAppointments = require("../controllers/appointments/getAppointments");
const getPatientAppointments = require("../controllers/appointments/getPatientAppointments");
const getDoctorsAppointment = require("../controllers/appointments/getDoctorsAppointment");
const updateStatus = require("../controllers/appointments/updateStatus");
const verifyUser = require("../middlewares/verifyUser");
const getFilteredAppointment = require("../controllers/appointments/getFilteredAppointment");

const appointmentRoute = express.Router();

// Get patient Appointments
appointmentRoute.get(
   "/patient",
   verifyUser(["patient"]),
   getPatientAppointments
);

// Get doctor Appointments
appointmentRoute.get("/doctor", verifyUser(["doctor"]), getDoctorsAppointment);

// Get filtered appointment
// appointmentRoute.get("/filter", getFilteredAppointment);

// Get one Appointment
appointmentRoute.get("/:id", getAppointment);

// Get all Appointment
appointmentRoute.get("/", getAppointments);

// Add an appointment
appointmentRoute.post("/", verifyUser([]), addAppointment);

// update appointment status
appointmentRoute.put("/update/:id", verifyUser([]), updateStatus);

// Add multiple doctors
// appointmentRoute.post("/multiple", addMultipleDoctor);

module.exports = appointmentRoute;
