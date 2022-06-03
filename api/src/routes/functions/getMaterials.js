const { Material } = require("../../db");

const getMaterials = async (req, res) => {
  try {
    const materials = await Material.findAll();
    res.send(materials);
  } catch (error) {
    console.log("Error fuction getMaterials");
  }
};

module.exports = getMaterials;
