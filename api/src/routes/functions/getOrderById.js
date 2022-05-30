const { Order } = require("../../db")

const getOrderById = async (req, res) => {

  const { id } = req.params

  if (id) {
    try {
      const order = await Order.findByPk(id)
      res.send(order)
    } catch (error) {
      res.status(404).send(error)
    }
  } else {
    res.status(404).send(error)
  }

}

module.exports = getOrderById
