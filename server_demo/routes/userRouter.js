/* eslint-disable prettier/prettier */
// external impotrt
const express = require('express');
const checkLogin = require('../middleware/checkLogin');

// internal import
const {
 getUser, updateUser, deleteUser, getAllUser, userStates,
} = require('../controller/userController');

const router = express.Router();

// get a user
router.get('/find/:id', checkLogin, getUser);

// get all user
router.get('/', checkLogin, getAllUser);

// stats user
router.get('/stats', checkLogin, userStates);

// update a user
router.put('/:id', checkLogin, updateUser);

// delete a user
router.delete('/:id', checkLogin, deleteUser);

module.exports = router;
