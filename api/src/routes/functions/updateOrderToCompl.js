const { User, Order } = require("../../db")

const updateOrderToCompl = () => {
  const email = req.params.email;

  if (email) {
    let userId = await User.findOne({
      where: { email: email },
    })
    const info = await Order.findAll({
      where: { usuarioId: userId.id, status: "Pending" },
    })

    if (info) {

      await Order.update({ status: "completed" }, { where: { status: "Pending" } })

      res.send('El status ha cambiado correctamente')
    } else res.status(404).send('Cart not found')
  }

}

module.exports = updateOrderToCompl;