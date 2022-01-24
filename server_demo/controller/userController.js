/* eslint-disable no-underscore-dangle */
// external import
const bcrypt = require('bcrypt');
const UserModel = require('../models/user');

// update a user
const updateUser = async (req, res) => {
    // if the token is valid | req.user.id === req.params.id || req.user.isAdmin
    if (req.user.id === req.params.id || req.user.isAdmin) {
        // hash the updated password
        if (req.body.password) {
            req.body.password = await bcrypt.hash(req.body.password, 10);
        }

        try {
            const updatedUser = await UserModel.findByIdAndUpdate(
                req.params.id,
                {
                    $set: req.body,
                },
                { new: true }
            );

            res.status(200).json({
                message: updatedUser,
            });
        } catch (error) {
            res.status(500).json({
                error: error.message,
            });
        }
    } else {
        res.status(403).json({
            error: 'You are not allowed to update the user!',
        });
    }
};

// delete a user
const deleteUser = async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        try {
            await UserModel.findByIdAndDelete(req.params.id);
            res.status(200).json({
                message: 'User deleted.',
            });
        } catch {
            res.status(200).json({
                error: 'Authentication failed!',
            });
        }
    } else {
        res.status(500).json({
            error: 'You are not allowed to delete user!',
        });
    }
};

// get a user
const getUser = async (req, res) => {
    // only admin can get user
    if (req.user.isAdmin) {
        try {
            const user = await UserModel.findById(req.params.id);
            const { password, ...others } = user._doc;
            res.status(200).json({
                message: others,
            });
        } catch {
            res.status(200).json({
                error: 'Authentication failed!',
            });
        }
    } else {
        res.status(500).json({
            error: 'only admin can get user!',
        });
    }
};

// get all user
const getAllUser = async (req, res) => {
    // only admin can get user
    if (req.user.isAdmin) {
        try {
            const query = req.query.new;
            const users = query
                ? await UserModel.find().sort({ _id: -1 }).limit(5)
                : await UserModel.find();
            res.status(200).json({
                message: users,
            });
        } catch {
            res.status(500).json({
                error: 'Authentication failed!',
            });
        }
    } else {
        res.status(500).json({
            error: 'only admin can get user!',
        });
    }
};

const userStates = async (req, res) => {
    // only admin can get user
    if (req.user.isAdmin) {
        try {
            const date = new Date();
            const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

            const data = await UserModel.aggregate([
                {
                    $match: {
                        createdAt: {
                            $gte: lastYear,
                        },
                    },
                },
                {
                    $project: {
                        month: {
                            $month: '$createdAt',
                        },
                    },
                },
                {
                    $group: {
                        _id: '$month',
                        total: { $sum: 1 },
                    },
                },
            ]);

            res.status(200).json({
                message: data,
            });
        } catch {
            res.status(500).json({
                error: 'Authentication failed!',
            });
        }
    } else {
        res.status(500).json({
            error: 'only admin can get user!',
        });
    }
};

module.exports = {
    getUser,
    updateUser,
    deleteUser,
    getAllUser,
    userStates,
};
