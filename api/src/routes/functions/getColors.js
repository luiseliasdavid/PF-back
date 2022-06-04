const { Color } = require("../../db");

const getColors = async (req, res) => {
  const colors = await Color.findAll();
  res.json(colors);
}

module.exports = getColors;