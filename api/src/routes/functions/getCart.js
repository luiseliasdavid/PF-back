const { User, Sneaker, Cart } = require('../../db');

const getCart = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({
      where: { email },
    });
    const cart = await Cart.findAll({
      where: {
        userId: user.id,
      },
      attributes: ['sneakerId','size'],
      order: ['sneakerId'],
    });
    const sneakerId = cart.map(c => c.sneakerId);
    res.json(sneakerId);
  } catch (error) {
    res.status(500).json({ message: 'Error al agregar al carrito' });
  }
};

module.exports = getCart;