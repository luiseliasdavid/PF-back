const { Order } = require("../../db")

const getOrders = async (req, res) => {
  const orders = await Order.findAll()
  res.send(orders)

}

module.exports = getOrders;