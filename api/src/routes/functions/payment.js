const Stripe = require("stripe");
require("dotenv").config();
const { STRIPE_KEY } = process.env;
const stripe = new Stripe(STRIPE_KEY);

const payment = async (req, res) => {
  // console.log(id, amount);
  try {
    const { id, amount } = req.body;
    const payment = await stripe.paymentIntents.create({
      payment_method: id,
      amount,
      currency: "USD",
      confirm: true,
    });
    //  console.log(payment);
    res.json({ msg: "Payment made successfully", received: true });
  } catch (e) {
    res.status(404).json({ msg: "Payment declined", received: false });
    console.log("Error fuction payment");
  }
};

module.exports = payment;
