const { Order, User } = require("../../db")

async function createOrder(req, res) {
  try {
    const { email, address, products, total, date } = req.body

    const user = await User.findOne({where: {email: email}});

    if (user) {
      const newOrder = await Order.create({ userId: user.id, address, products, nameUser:user.nameUser ,total, date, state: "Pending" });
      res.status(201).send(newOrder);
      
    }

  } catch (error) {
    res.status(404).send(error)
  }
}

module.exports = createOrder;