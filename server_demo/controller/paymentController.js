/* eslint-disable prettier/prettier */
const stripe = require('stripe')(process.env.STRIPE_KEY);

const createPayment = (req, res) => {
    stripe.charges.create(
        {
            source: req.body.tokenId,
            ammount: req.body.ammount,
            currency: 'usd',
        },
        (stirpeErr, stripeRes) => {
            if (stirpeErr) {
                res.status(500).json({
                    error: stirpeErr,
                });
            } else {
                res.status(200).json({
                    message: stripeRes,
                });
            }
        },
    );
};

module.exports = { createPayment };
