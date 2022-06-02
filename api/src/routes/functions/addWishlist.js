const { User, Sneaker, wishlist } = require('../../db');

const addWishlist = async (req, res) => {
  const { email, id } = req.body;
  try {
    const user = await User.findOne({
      where: { email },
    });
    if(!email) return res.json({ message: `user ${email} is a error` })
    await Promise.all(id.map(async i => {
      const sneaker = await Sneaker.findOne({
        where: { id: i }
      })
      if (user && sneaker) {
        const [obj, boolean] = await wishlist.findOrCreate({
          where: {
            userId: user.id,
            sneakerId: i
          }
        });
      }
    }))
    res.json({ message: `The record was added successfully` });
  }
  catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = addWishlist;