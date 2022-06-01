const { Order, User } = require("../../db")
var dateTime = require('node-datetime');
const emailer = require('./emailer')

async function createOrder(req, res) {
  let dt = dateTime.create();
  const date = dt.format('d-m-Y H:M:S');
  try {
    const { email, address, products, total } = req.body

    const user = await User.findOne({where: {email: email}});
  
    if (user) {
      const newOrder = await Order.create({ userId: user.id, address:address, products:products, nameUser:user.nameUser ,total:total, date: date, state: "Pending" });
      emailer(email, `ortder status is`,"Pending"  )

      res.status(201).send(newOrder);
      
    }

  } catch (error) {
    res.status(404).json({msg: error})
  }
}

module.exports = createOrder;