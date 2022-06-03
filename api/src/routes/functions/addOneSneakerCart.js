const { User, Sneaker } = require("../../db");
const addOneSneakerCart = async (req, res) => {
  try {
    const { email, sneakerId } = req.body;
    const user = await User.findOne({
      where: { email: email },
    });
    const sneaker = await Sneaker.findOne({
      where: { id: sneakerId },
    });
    user.addSneaker(sneaker, { through: { quantity: 1 } });
    res.send("Producto agregado");
  } catch (error) {
    console.log("Error fuction addOneSneakerCart");
  }
};

module.exports = addOneSneakerCart;
