const { model } = require("mongoose");
const specialitiesSchema = require("../schemas/specialitiesSchema");
const doctorSchema = require("../schemas/doctorsSchema");

// Models
const DoctorModel = model("Doctors", doctorSchema);
const SpecialitiesModel = model("Specialities", specialitiesSchema);

// Export
module.exports = { DoctorModel, SpecialitiesModel };
