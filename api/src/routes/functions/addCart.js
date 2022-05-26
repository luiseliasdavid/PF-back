const { User, Sneaker, Cart } = require('../../db');

const addCart = async (req, res) => {
	const { email, productData } = req.body;
	try {
		const user = await User.findOne({
			where: { email },
		});
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
    
		res.json({ message: `user's product's cart ${user.email} updated` });
	} catch (error) {
		res.status(500).json({ message: 'Error al agregar al carrito' });
	}
};

module.exports = addCart;