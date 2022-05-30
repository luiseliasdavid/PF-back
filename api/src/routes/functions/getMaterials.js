const { Material } = require("../../db")

const getMaterials = async (req, res) => {
  const materials = await Material.findAll();
  res.send(materials);
}

module.exports = getMaterials;