const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true,
   },
   photoURL: {
      type: String,
   },
   speciality: {
      type: mongoose.Types.ObjectId,
      ref: "Specialities",
   },
   tagline: {
      type: String,
   },
   ratings: {
      type: Number,
   },
   feedback: {
      type: Number,
   },
   location: {
      type: String,
   },
   clinicServices: {
      type: Array,
   },
   price: {
      type: Number,
   },
   bio: {
      type: String,
   },
   education: {
      type: Array,
   },
   experience: {
      type: Array,
   },
   awards: {
      type: Array,
   },
   services: {
      type: Array,
   },
   specializations: {
      type: Array,
   },
});

module.exports = doctorSchema;
