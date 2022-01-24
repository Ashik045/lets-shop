// external impotrt
const express = require('express');

// internal import
const { postUser, loginUser } = require('../controller/authController');

const router = express.Router();

// create a user
router.post('/register', postUser);

// create a user
router.post('/login', loginUser);

module.exports = router;
