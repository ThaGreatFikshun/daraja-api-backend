const express = require('express');
const { initiateSTKPush, handleCallback } = require('../controllers/mpesaController');

const router = express.Router();

// Initiate STK Push
router.post('/stkpush', initiateSTKPush);

// Handle M-Pesa Callback
router.post('/callback', handleCallback);

module.exports = router;
