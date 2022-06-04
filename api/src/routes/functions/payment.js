const Stripe = require('stripe');
require('dotenv').config();
const { STRIPE_KEY } = process.env;
const stripe = new Stripe(STRIPE_KEY);




const payment= async (req, res) => {
const { id, amount } = req.body;
    try {
      const payment = await stripe.paymentIntents.create({
        payment_method: id,
        amount,
        currency: 'USD',
        confirm: true
      })
      res.json({ msg: 'Payment made successfully', received: true })
    } catch (e) {
      res.status(404).json({ msg: 'Payment declined', received: false });
    }
}

module.exports = payment;