/* eslint-disable prettier/prettier */
// external impotrt
const express = require('express');

// internal import
const { createPayment } = require('../controller/paymentController');

const router = express.Router();

// app routes
router.post('/payment', createPayment);

module.exports = router;
