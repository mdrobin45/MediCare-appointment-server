const { Schema, default: mongoose } = require("mongoose");

const doctorsSchema = new Schema({
   name: {
      type: String,
      required: true,
   },
   photoURL: {
      type: String,
   },
   tagline: {
      type: String,
   },
   gender: {
      type: String,
   },
   age: {
      type: Number,
   },
   address: {
      type: String,
   },
   phone: {
      type: Number,
   },
   ratings: {
      type: Number,
   },
   overview: {
      type: String,
   },
   education: {
      type: Array,
   },
   category: {
      type: mongoose.Types.ObjectId,
      ref: "Category",
   },
});

module.exports = doctorsSchema;
