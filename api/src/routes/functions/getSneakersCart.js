const { User, Sneaker } = require("../../db");

const getSneakersCart = async (req, res) => {
  try {
    const { id } = req.params;

    const sneakers = await User.findOne({
      where: {
        id: id,
      },
      include: Sneaker,
    });

    res.send(sneakers);
  } catch (error) {
    console.log("Error fuction getSneakersAll");
  }
};

module.exports = getSneakersCart;
