/* eslint-disable comma-dangle */
const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema(
    {
        title: {
            type: String,
            require: true,
            unique: true,
        },
        desc: {
            type: String,
            require: true,
        },
        image: {
            type: String,
            require: true,
        },
        category: {
            type: Array,
        },
        price: {
            type: String,
            require: true,
        },
        color: {
            type: String,
        },
        size: {
            type: String,
        },
    },
    { timestamps: true }
);

const ProductModel = mongoose.model('Product', ProductSchema);

module.exports = ProductModel;
