const { Sneaker } = require("../../db");


const getSneakersAll = async (req, res) => {
    const sneaker = await Sneaker.findAll({
        attributes: { exclude: ['colorId', 'sizeId', 'modelId'] },
        include: { all: true, nested: true }
    });
    res.send(sneaker);
}

module.exports = getSneakersAll;

