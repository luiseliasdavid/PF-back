const { User, Order } = require("../../db");

const updateOrderToCompl =async (req, res) => {
  const id = req.params.id
  const {newStatus } = req.body;
  if (!newStatus) res.json({ msg: "id is missing" });

  try {
    const order = await Order.findByPk(id);

    if (order) {
      // actualizando status
      order.state = newStatus;
      order.save;

      //extrayendo id cliente para mandar email
      const user = await User.findByPk(order.userId)
      const email = user.email

      res.json({
        msg: `the status of the Order ${order.id} has been updated to ${order.state} and email client is ${email} `,
      });
    }
  } catch (error) {
    res.json({ msg: error })
  }
};

module.exports = updateOrderToCompl;
