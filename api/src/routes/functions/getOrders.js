const { Order } = require("../../db");

const getOrders = async (req, res) => {
  try {
    const orders = await Order.findAll();
    res.send(orders);
  } catch (error) {
    console.log("Error fuction getOrders");
  }
};

module.exports = getOrders;
