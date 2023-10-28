const { Schema } = require("mongoose");

const specialitiesSchema = new Schema({
   name: {
      type: String,
   },
});

module.exports = specialitiesSchema;
