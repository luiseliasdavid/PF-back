const { User, Sneaker, Cart } = require('../../db');

async function deleteCart(req, res) {
  const { email, productData } = req.body;
  console.log(email);
  const user = await User.findOne({
    where: { email }
  });

  await Cart.destroy({
    where: {
      userId: user.id
    }
  })

  productData.map(async (product) => {
    const sneaker = await Sneaker.findOne({
      where: { id: product.sneakerId },
    });

    const existe = await Cart.findAll({
      where: {
        userId: user.id,
        sneakerId: sneaker.id,
        size: product.size
      }
    });

    if (!existe.length) {
      console.log('ENTREEE A CREAR');
      await Cart.create({
        quantity: product.qty,
        size: product.size,
        userId: user.id,
        sneakerId: sneaker.id,
      });
    } else {
      console.log('ENTREEE A ACTUALIZAR');
      await Cart.update(
        { quantity: product.qty },
        { where: { userId: user.id, sneakerId: sneaker.id, size: product.size } }
      );
    }
  });

  res.json('Cart Updated');
}

module.exports = deleteCart;