const { User, Sneaker, Cart } = require('../../db');

const getCart = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({
      where: { email: email },
    });
    const cart = await Cart.findAll({
      where: {
        userId: user.id,
      },
    });

    const all = await Promise.all(cart.map(async product => await Sneaker.findOne({
      where: {
        id: product.sneakerId
      },
      include: { all: true, nested: true }
    })))
      .then(data => data.map((sneaker, i) =>
      ({
        sneakerId: sneaker.id,
        name: sneaker.model.nameModel,
        brand: sneaker.model.brand.nameBrand,
        categories: sneaker.model.categories.map(category => category.nameCategory),
        price: sneaker.price,
        description: sneaker.model.description,
        size: cart[i].size,
        max: sneaker.model.sizes.filter(({ numberSize }) => numberSize === cart[i].size).stock,
        qty: cart[i].quantity,
        image: sneaker.image,
        wishlisted: false,
      })
      )
      );

    res.json(all);
  } catch (error) {
    res.status(500).json({ message: 'Error al agregar al carrito' });
  }
};

module.exports = getCart;

/* const all = await Sneaker.findAll({
  where: {
    id: sneakerId
  },
  include: { all: true, nested: true }
})
  .then(data => data.map((sneaker, i) => 
  ({
      sneakerId: sneaker.id,
      name: sneaker.model.nameModel,
      brand: sneaker.model.brand.nameBrand,
      categories: sneaker.model.categories.map(category => category.nameCategory),
      price: sneaker.price,
      description: sneaker.model.description,
      size: cart[i].size,
      max: sneaker.model.sizes.filter(({ numberSize }) => numberSize === cart[i].size).stock,
      qty: cart[i].quantity,
      image: sneaker.image,
      wishlisted: false,
    })
  )
  ); */