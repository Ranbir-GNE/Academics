// routes/api.js

const express = require('express');
const router = express.Router();
const User = require('../models/User');

// GET user details
router.get('/user/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
