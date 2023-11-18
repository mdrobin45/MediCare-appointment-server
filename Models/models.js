const { model } = require("mongoose");
const specialitiesSchema = require("../schemas/specialitiesSchema");
const doctorSchema = require("../schemas/doctorsSchema");
const appointmentSchema = require("../schemas/appointmentSchema");
const userSchema = require("../schemas/userSchema");

// Models
const DoctorModel = model("Doctors", doctorSchema);
const SpecialitiesModel = model("Specialities", specialitiesSchema);
const AppointmentModel = model("Appointments", appointmentSchema);
const UserModel = model("Users", userSchema);

// Export
module.exports = {
   DoctorModel,
   SpecialitiesModel,
   AppointmentModel,
   UserModel,
};
