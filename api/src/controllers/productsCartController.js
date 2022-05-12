const { Cart, Sneakers, Users } = require('../db')
const { Op } = require("sequelize");

module.exports = {
    AddCartProduct: async (req, res) => {

        const { idSneaker, size, amount, idUser } = req.body;
        if (!idSneaker || !size || !amount || !idUser) {
            return res.status(400).json({ success: false, msg: 'All fields are required' });
        }
        const onCart = await Cart.findAll({
            raw: true,
            where: {
                [Op.and]: [{ userId: idUser }, { sneakerId: idSneaker }, { size: size }],
            }
        })
        // console.log(onCart[0].id)
        if (onCart.length === 0) {
            try {
                let newProduct = await Cart.create({
                    size,
                    amount,
                    sneakerId: idSneaker,
                    userId: idUser
                })
                return res.status(201).json({ success: true, msg: 'The product  has been added to the cart successfully', user: newProduct })
            } catch (error) {
                console.log(error)
                res.status(500).json({ error: error, msg: 'Ups, something went wrong' })
            }
        }
        try {
            const cartFound = await Cart.findByPk(onCart[0].id);
            await cartFound.update({ amount: onCart[0].amount + amount })
            res.status(201).json({ success: true, msg: 'The product  has been updated to the cart successfully', user: cartFound });
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error, msg: 'Ups, something went wrong' });
        }

    },

    GetCartProducts: async (req, res) => {
        const { id } = req.params;
        if (!id) return res.status(400).json({ success: false, msg: 'id_user is required' });
        try {
            const cartProducts = await Cart.findAll({
                where: {
                    userId: id,
                },
                include: Sneakers,
            });
            res.json({ succes: true, data: cartProducts });
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error, msg: 'Ups, something went wrong' });
        }
    },

    DeleteCartProduct: async (req, res) => {
        const { id } = req.params;
        try {
            const cart = await Cart.findByPk(id);
            if (!cart) {
                return res.status(404).json({
                    success: false,
                    message: "cart does not exist with that id",
                });
            }
            await cart.destroy();
            res.status(201).json({ success: true, msg: 'The product  has been deleted successfully' })

        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error, msg: 'Ups, something went wrong' });
        }
    }
}
