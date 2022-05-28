const { Order } = require("../../db")

async function createOrder(req, res) {
  try {
    const { userId, address, products, total, date } = req.body
    const newOrder = await Order.create({ userId, address, products, total, date, state: "Pending" });

    res.status(201).send(newOrder);

  } catch (error) {
    res.status(404).send(error)
  }
}

module.exports = createOrder;