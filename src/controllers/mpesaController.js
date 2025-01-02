const { generateAccessToken, performSTKPush } = require('../services/mpesaService');

// Initiate STK Push
exports.initiateSTKPush = async (req, res) => {
    try {
        const { phoneNumber, amount, accountReference, transactionDesc } = req.body;
        const accessToken = await generateAccessToken();
        const response = await performSTKPush(accessToken, { phoneNumber, amount, accountReference, transactionDesc });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Handle M-Pesa Callback
exports.handleCallback = (req, res) => {
    console.log('M-Pesa Callback:', req.body);
    res.status(200).send();
};
