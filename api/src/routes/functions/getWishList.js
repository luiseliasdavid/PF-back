const { User, wishlist } = require('../../db');

const getWishlist = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({
      where: { email },
    });

    if (user) {
      const wish = await wishlist.findAll({
        where: {
          userId: user.id
        }
      });
      res.json(wish.map(sneaker => sneaker.sneakerId));
    } else {
      res.json({ message: `user ${email} is a error` })
    }
  }
  catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = getWishlist;