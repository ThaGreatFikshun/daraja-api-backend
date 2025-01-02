// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const app = require('./src/app');

// Load environment variables
dotenv.config();

// Set the default port
const PORT = process.env.PORT || 5001;

// Initialize Express server
const server = express();

// Middleware for parsing JSON requests
server.use(bodyParser.json());

// Mount application routes
server.use('/api', app);

// Global error handler
server.use((err, req, res, next) => {
    console.error('Error:', err.message || 'Internal Server Error');
    res.status(err.status || 500).json({
        error: err.message || 'Internal Server Error',
    });
});

// Start the server
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
