const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes'); // Import the router

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/User', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Connected to User database'))
  .catch((error) => console.error('User database connection error:', error));

// Use the auth routes
app.use('/api/auth', authRoutes); // Pass authRoutes directly here

// Start server
app.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
});
