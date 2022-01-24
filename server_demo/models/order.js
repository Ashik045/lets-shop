/* eslint-disable comma-dangle */
const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema(
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
        amount: {
            type: Number,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            default: 'pending',
        },
    },
    { timestamps: true }
);

const OrderModel = mongoose.model('Order', OrderSchema);

module.exports = OrderModel;
