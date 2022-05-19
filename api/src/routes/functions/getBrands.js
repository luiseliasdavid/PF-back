const {Brand} = require("../../db");

const getBrands = async (req, res) => {
    const brands = await Brand.findAll();
    res.send(brands);
}

module.exports =getBrands;
  
  