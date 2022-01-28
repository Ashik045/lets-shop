/* eslint-disable comma-dangle */
/* eslint-disable no-underscore-dangle */
// external import
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// internal import
const UserModel = require('../models/user');

// save a user to database
const postUser = async (req, res) => {
    try {
        const hashedPass = await bcrypt.hash(req.body.password, 10);
        const user = new UserModel({
            fullname: req.body.fullname,
            username: req.body.username,
            email: req.body.email,
            password: hashedPass,
        });
        await user.save();

        res.status(200).json({
            message: 'Signup successfull.',
        });
    } catch (err) {
        res.status(500).json({
            error: 'Authentication failed!',
        });
    }
};

// login a user by email
const loginUser = async (req, res) => {
    try {
        const user = await UserModel.find({ email: req.body.email });
        if (user) {
            const isCorrectPass = await bcrypt.compare(req.body.password, user[0].password);

            if (isCorrectPass) {
                const token = jwt.sign(
                    {
                        id: user[0]._id,
                        username: user[0].username,
                        isAdmin: user[0].isAdmin,
                    },
                    process.env.JWT_SECRET,
                    { expiresIn: '2d' }
                );

                res.status(200).json({
                    message: user,
                    token,
                });
            } else {
                res.status(500).json({
                    error: 'Authentication failed!',
                });
            }
        } else {
            res.status(500).json({
                error: 'Authentication failed!',
            });
        }
    } catch {
        res.status(500).json({
            error: 'Authentication failed!',
        });
    }
};

module.exports = { postUser, loginUser };
