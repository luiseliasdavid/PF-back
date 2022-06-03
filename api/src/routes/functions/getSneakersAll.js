const { Sneaker } = require("../../db");

const getSneakersAll = async (req, res) => {
  try {
    const sneaker = await Sneaker.findAll({
      attributes: { exclude: ["colorId", "sizeId", "modelId"] },
      include: { all: true, nested: true },
    });
    res.send(sneaker);
  } catch (error) {
    console.log("Error fuction getSneakersAll");
  }
};

module.exports = getSneakersAll;
