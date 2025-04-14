require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./middleware/config/db');// idhar change kiya hai ###

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Use express.json() instead of bodyParser.json()
app.use(express.urlencoded({ extended: true })); // To handle URL-encoded data

// Import and use routes
const apiRoutes = require('./routes/api');// aur idhar###
app.use('/api', apiRoutes);

// Set up the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

