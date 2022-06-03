const { User, Sneaker } = require("../../db");

const addSneakersCart = async (req, res) => {
  try {
    const { email, sneakerId, quantity } = req.body;
    const user = await User.findOne({
      where: { email: email },
    });
    const sneaker = await Sneaker.findOne({
      where: { id: sneakerId },
    });
    user.addSneaker(sneaker, { through: { quantity: quantity } });
    res.send("Producto agregado");
  } catch (error) {
    console.log("Error fuction addSneakersCart");
  }
};

module.exports = addSneakersCart;
