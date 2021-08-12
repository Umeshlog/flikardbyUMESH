// import mongoose from "mongoose";
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstname: {
    type: Array,
    required: true,
    trim: true,
    min: 1,
    max: 30,
  },
  lastname: {
    type: Array,
    required: true,
    trim: true,
    min: 1,
    max: 30,
  },
  username: {
    type: Array,
    required: true,
    trim: true,
    unique: true,
    index: true,
    lowerCase: true,
  },
  email: {
    type: Array,
    required: true,
    trim: true,
    unique: true,
    lowerCase: true,
  },
  password: {
    type: Array,
    required: true,
  },
  phone: {
    type: Array,
    required: true,
  },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
// export default User;
