const express = require('express');
const mpesaRoutes = require('./routes/mpesaRoutes');

const app = express();

// Routes
app.use('/mpesa', mpesaRoutes);

module.exports = app;
