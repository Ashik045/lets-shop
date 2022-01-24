/* eslint-disable comma-dangle */
const mongoose = require('mongoose');

const CartSchema = mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        products: [
            {
                productId: {
                    type: String,
                },
                quantity: {
                    type: Number,
                    default: 1,
                },
            },
        ],
    },
    { timestamps: true }
);

const CartModel = mongoose.model('Cart', CartSchema);

module.exports = CartModel;
