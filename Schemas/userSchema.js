const { Schema } = require("mongoose");

const userSchema = new Schema({
   email: {
      type: String,
      required: true,
   },
   phone: {
      type: String,
   },
   gender: {
      type: String,
   },
   age: {
      type: Number,
   },
   role: {
      type: String,
      enum: ["admin", "doctor", "patient"],
   },
});

module.exports = userSchema;
