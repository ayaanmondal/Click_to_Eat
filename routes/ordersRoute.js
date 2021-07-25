const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const Order = require('../models/orderModel')

const stripe = require("stripe")("sk_test_51JGzdKSHNX9Oz9p2yb4AQTsTfYx03Jo9D1e3Gk94S2F0655khhXsp5WF05ee2MtfkXcIu9r5uNvKEOL4MrKKQ4ok00JuU7tOzZ")
router.post("/placeorder", async(req, res) => {

    const {token, subtotal, currentUser, cartItems} = req.body

    try {
        const customer = await stripe.customers.create({
            email: token.email,
            source: token.id
        })

        const payment = await stripe.charges.create({
            amount: subtotal * 100,
            currency: 'INR',
            customer: customer.id,
            receipt_email: token.email
        }, {
            idempotencyKey : uuidv4()
        })

        if(payment){

            const neworder = new Order({
                name: currentUser.name,
                email: currentUser.email,
                userid: currentUser.userid,
                orderItems: cartItems,
                orderAmount: subtotal,
                shippingAddress: {
                    street: token.card.address_line1,
                    city: token.card.address_city,
                    country: token.card.address_zip
                },
                transactionId: payment.source.id

            })

            neworder.save()

            res.send('Order Placed Successfully')
        } else{
            res.send('Payment Failed')
        }
    } catch (error) {
        return res.status(400).json({message: 'Something Went Wrong' + error})
    }

})

module.exports = router