const { Order } = require("../../db");

const getOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    if (id) {
      const order = await Order.findByPk(id);
      res.send(order);
    } else {
      res.status(404).send(error);
    }
  } catch (error) {
    res.status(404).send(error);
    console.log("Error fuction getOrderById");
  }
};

module.exports = getOrderById;
