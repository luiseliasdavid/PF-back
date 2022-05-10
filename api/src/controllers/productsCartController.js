const { Cart, Product } = require('../db')


module.exports = {
    AddProduct: async (req, res) => {

        const { idProduct, size, amount, price, idUser } = req.body;
        if (!idProduct, !size, !amount, !price, !idUser) {
            return res.status(400).json({ success: false, msg: 'All fields are required' });
        }
        try {
            let newProduct = await Cart.create({
                idProduct,
                size,
                amount,
                price,
                idUser
            })
            res.status(201).json({ success: true, msg: 'The product  has been added to the cart successfully', user: newProduct })
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: error, msg: 'Ups, something went wrong' })
        }
    },

    GetProducts: async (req, res) => {
        const { idUser } = req.params;
        if (!idUser) return res.status(400).json({ success: false, msg: 'id_user is required' });
        try {
            const cartProducts = await Cart.findAll({
                where: {
                    idUser: idUser,
                },
                include: Product,
            });
            res.json({ succes: true, data: cartProducts });
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error, msg: 'Ups, something went wrong' });
        }
    }
}
