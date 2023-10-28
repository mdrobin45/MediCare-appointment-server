const { model } = require("mongoose");
const specialitiesSchema = require("../Schemas/specialitiesSchema");
const doctorSchema = require("../Schemas/doctorsSchema");

// Models
const DoctorModel = model("Doctors", doctorSchema);
const SpecialitiesModel = model("Specialities", specialitiesSchema);

// Export
module.exports = { DoctorModel, SpecialitiesModel };
