const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
   name: {
      type: String,
   },
   email: {
      type: String,
   },
   address: {
      type: String,
   },
   phone: {
      type: Number,
   },
   phone: {
      type: Number,
   },
   phone: {
      type: Number,
   },
   meetDate: {
      type: String,
   },
   meetTime: {
      type: String,
   },
   gender: {
      type: String,
   },
   birthday: {
      type: String,
   },
   note: {
      type: String,
   },
   doctor: {
      type: mongoose.Types.ObjectId,
      ref: "Doctors",
   },
   appointmentTime: {
      type: String,
   },
   price: {
      type: Number,
   },
   adminStatus: {
      type: String,
   },
   status: {
      type: String,
   },
});

module.exports = appointmentSchema;
