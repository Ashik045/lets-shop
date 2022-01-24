/* eslint-disable prettier/prettier */
// internal import
const CartModel = require('../models/cart');

// create a Cart
const postCart = async (req, res) => {
        try {
            const newCart = new CartModel(req.body);
            const Cart = await newCart.save();

            res.status(200).json({
                message: Cart,
            });
        } catch {
            res.status(500).json({
                error: 'Failed to create a Cart',
            });
        }
};

// update a Cart
// verifytoken and authorization
const updateCart = async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        try {
            const updatedCart = await CartModel.findByIdAndUpdate(
                req.params.id,
            {
                $set: req.body,
            }, {
                new: true,
                },
            );

            res.status(200).json({
                message: updatedCart,
            });
        } catch {
            res.status(500).json({
                error: 'Failed to update a Cart',
            });
        }
    } else {
        res.status(500).json({
            error: 'Failed to update a Cart!',
        });
    }
};

// delete a Cart
const deleteCart = async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        try {
            await CartModel.findByIdAndDelete(req.params.id);

            res.status(200).json({
                message: 'Cart deleted.',
            });
        } catch {
            res.status(500).json({
                error: 'Failed to delete a Cart',
            });
        }
    } else {
        res.status(500).json({
            error: 'Failed to delete a Cart!',
        });
    }
};

// find a user Cart
const findOneCart = async (req, res) => {
        try {
           const Cart = await CartModel.findOne({ userId: req.params.userId });

            res.status(200).json({
                message: Cart,
            });
        } catch {
            res.status(500).json({
                error: 'Failed to find Cart',
            });
        }
};

// get all
const getAll = async (req, res) => {
    try {
        const allCart = await CartModel.find();

        res.status(200).json({
                message: allCart,
            });
    } catch (error) {
        res.status(500).json({
                error: 'Failed to find Cart',
            });
        }
    };

module.exports = {
 postCart, updateCart, deleteCart, findOneCart, getAll,
};
