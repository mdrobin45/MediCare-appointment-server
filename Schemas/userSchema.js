const { Schema } = require("mongoose");

const userSchema = new Schema({
   name: {
      type: String,
      required: true,
   },
   email: {
      type: String,
      required: true,
   },
   phone: {
      type: String,
   },
   password: {
      type: String,
      required: true,
   },
   gender: {
      type: String,
   },
   age: {
      type: Number,
   },
   role: {
      type: String,
      enum: ["admin", "patient"],
   },
});

module.exports = userSchema;
