const mongoose = require("mongoose");
const validator = require("validator");


const studentsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 3
  },
  email: {
    type: String,
    require: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("email is invalid");
      }
    }
  },
  phone: {
    type: Number,
    required: true,
    unique: true,
    minLength: 10,
    maxlength: 10
  },
  address: {
    type: String,
    required: true
  }
});

// we will create a new collection
const Student = new mongoose.model("Student", studentsSchema);

module.exports = Student;
