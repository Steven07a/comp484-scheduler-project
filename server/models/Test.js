const mongoose = require("mongoose");

// testing the creation of a schema 
const TestSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const test = mongoose.model("Test", TestSchema);
module.exports = test