/* eslint-disable prettier/prettier */
const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        fullname: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true },
);

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
