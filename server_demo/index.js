// external import
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

// internal import
const userRouter = require('./routes/userRouter');
const authRouter = require('./routes/authRouter');
const productRouter = require('./routes/productRouter');
const cartRouter = require('./routes/cartRouter');
const orderRouter = require('./routes/orderRouter');

const app = express();

dotenv.config();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// database connnection with mongodb
mongoose
    .connect(process.env.DATABASE_CONNECTION_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    })
    .then(() => {
        console.log('mongodb connection successfull');
    })
    .catch((err) => {
        console.log(err);
    });

// application routing
app.use('/api/auth', authRouter); // check done
app.use('/api/users', userRouter); // check done
app.use('/api/products', productRouter); // check done
app.use('/api/cart', cartRouter); // check done
app.use('/api/order', orderRouter); // * failed to find a user Order, get all, get monthly income*

// not found handler
app.use((req, res, next) => {
    res.status(404).json({
        error: 'Requested url not found!',
    });
});

// error handling
app.use((err, req, res, next) => {
    res.status(500).json({
        error: err,
    });
});

// application connection port
app.listen(process.env.APP_CONNECTION_PORT || 4000, () => {
    console.log(`application running on ${process.env.APP_CONNECTION_PORT}`);
});
