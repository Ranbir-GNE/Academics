// models/User.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  enrolledCourses: [String], // Array of enrolled course names
});

module.exports = mongoose.model('User', userSchema);
