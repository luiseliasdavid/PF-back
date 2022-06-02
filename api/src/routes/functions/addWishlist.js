const { User, Sneaker, wishlist } = require('../../db');

const addWishlist = async (req, res) => {
  const { email, id } = req.body;
  console.log('email',email,' id',id)
  try {
    const user = await User.findOne({
      where: { email },
    });
    console.log('user ',user);
    const sneaker = await Sneaker.findOne({
      where: { id }
    })
    console.log('sneaker ',sneaker)

    if (user && sneaker) {
      const [ obj, boolean ] = await wishlist.findOrCreate({
        where: {
          userId: user.id,
          sneakerId: sneaker.id
        }
      });
      boolean ? res.json({ message: `The record was added successfully`}) : res.json({ message: `The record already exist`});
    } else {
      res.json({ message: `user ${email} is a error` })
    }
  }
  catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = addWishlist;