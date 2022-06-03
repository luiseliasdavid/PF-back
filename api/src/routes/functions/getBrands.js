const { Brand } = require("../../db");

const getBrands = async (req, res) => {
  try {
    const brands = await Brand.findAll();
    res.send(brands);
  } catch (error) {
    console.log("Error fuction getBrands");
  }
};

module.exports = getBrands;
