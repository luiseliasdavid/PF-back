const { User, Order } = require("../../db")


async function getOrderByUser(req, res) {
  const email  = req.params.id

  if (email) {
    const user = await User.findOne({
      where: { email: email },
    })
    if (user) {
      const info = await Order.findAll({
        where: { userId: user.id, },
      })
      if (info) {res.send(info)}
      else res.status(404).send('No hay pedidos en progreso')
    }
    
  }
}

module.exports = getOrderByUser;
