import express from "express"
import stripeImport from 'stripe'

const stripe = stripeImport('sk_test_51LzwFlGaQaB9dPEe3y2FawDApqTPra0aN3ywCVtHLx2vk0jCoXxAFwkvm25bTkG6Elu7et7Y9jCJGcThA8LQSRPC00yb3lbYnn');


const route = express.Router()

route.post("/payment", (req, res) => {
    stripe.charges.create(
        {
            source: req.body.tokenId,
            amount: req.body.amount,
            currency: "usd",
        },
        (stripeErr, stripeRes) => {
            if (stripeErr) {
                res.status(500).json(stripeErr);
            } else {
                res.status(200).json(stripeRes)
            }
        },

    )
})

export default route;
// module.exports = route;