const { User, wishlist } = require('../../db');

const deleteWishlist = async (req, res) => {
  const { email, id } = req.body;
  try {
    const user = await User.findOne({
      where: { email },
    });
    if (user) {
      const wish = await wishlist.destroy({
        where: {
          userId: user.id,
          sneakerId: id
        }
      });
      res.json({ message: `${wish} record deleted` });
    } else {
      res.json({ message: `user ${email} is a error` })
    }
  }
  catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = deleteWishlist;