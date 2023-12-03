const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
   {
      name: {
         type: String,
      },
      email: {
         type: String,
      },
      address: {
         type: String,
      },
      city: {
         type: String,
      },
      phone: {
         type: String,
      },
      meetDate: {
         type: String,
      },
      bookingDate: {
         type: String,
      },
      meetTime: {
         type: String,
      },
      gender: {
         type: String,
      },
      age: {
         type: String,
      },
      note: {
         type: String,
      },
      doctor: {
         type: mongoose.Types.ObjectId,
         ref: "Doctors",
      },
      doctorEmail: {
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
   },
   { timestamps: true }
);

module.exports = appointmentSchema;
