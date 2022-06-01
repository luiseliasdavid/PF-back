const { Order } = require("../../db")

const OrdersFiltered = async (req, res) => {
  const { filter } = req.query

  if (filter === 'Pending') {
    try {
      let ord = await Order.findAll({ where: { state: "Pending" } })
      res.send(ord)
    } catch (error) {
      res.status(404).send(error)
    }
  } else if (filter === 'Completed') {
    try {
      let ord = await Order.findAll({ where: { state: "Completed" } })
      res.send(ord)
    } catch (error) {
      res.status(404).send(error)
    }

  } else if (filter === 'all') {
    try {
      let ord = await Order.findAll()
      res.send(ord)
    } catch (error) {
      res.status(404).send(error)
    }
  } else if (filter === 'Cancelled') {
    try {
      let ord = await Order.findAll({ where: { state: "Cancelled" } })
      res.send(ord)
    } catch (error) {
      res.status(404).send(error)
    }
  } else if ((filter === 'InProgress')) {
    try {
      let ord = await Order.findAll({ where: { state: "In Progress" } })
      res.send(ord)
    } catch (error) {
      res.status(404).send(error)
    }
  }
}

module.exports = OrdersFiltered