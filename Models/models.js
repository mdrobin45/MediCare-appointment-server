const { model } = require("mongoose");
const userSchema = require("../Schemas/userSchema");
const doctorsSchema = require("../Schemas/doctorsSchema");
const categorySchema = require("../Schemas/categorySchema");

// Models
const AdminModel = model("Admin", userSchema);
const DoctorModel = model("Doctors", doctorsSchema);
const CategoryModel = model("Category", categorySchema);

// Export
module.exports = { AdminModel, DoctorModel, CategoryModel };
