/* eslint-disable prettier/prettier */
// external impotrt
const express = require('express');

// internal import
const checkLogin = require('../middleware/checkLogin');
const {
 postOrder, updateOrder, deleteOrder, findOneOrder, getAll, getMonthlyInc,
} = require('../controller/orderController');

const router = express.Router();

// app routes
// create a Order
router.post('/', checkLogin, postOrder);

// update a Order
router.put('/:id', checkLogin, updateOrder);

// delete a Order
router.delete('/:id', checkLogin, deleteOrder);

// get a Order
router.get('/find/:userid', findOneOrder);

// get all
router.get('/', getAll);

// get income
router.get('/income', getMonthlyInc);

module.exports = router;
