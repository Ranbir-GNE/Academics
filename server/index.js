// index.js

const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors')

const app = express();
app.use(cors())

// Middleware
app.use(express.json());

// Routes
app.use('/api', require('./routes/api'));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

const PORT = process.env.PORT || 5012;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
