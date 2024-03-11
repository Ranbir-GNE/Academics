// models/User.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  enrolledCourses: [String],
  // Define other fields as needed
});

module.exports = mongoose.model('User', userSchema);
