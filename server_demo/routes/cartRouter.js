/* eslint-disable prettier/prettier */
// external impotrt
const express = require('express');

// internal import
const checkLogin = require('../middleware/checkLogin');
const {
 postCart, updateCart, deleteCart, findOneCart, getAll,
} = require('../controller/cartController');

const router = express.Router();

// app routes
// create a Cart
router.post('/', checkLogin, postCart);

// update a Cart
router.put('/:id', checkLogin, updateCart);

// delete a Cart
router.delete('/:id', checkLogin, deleteCart);

// get a Cart
router.get('/find/:userid', findOneCart);

// get all
router.get('/', getAll);

module.exports = router;
