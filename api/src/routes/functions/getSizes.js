const { Size } = require("../../db")

const getSizes = async (req, res) => {
  const sizes = await Size.findAll();
  res.send(sizes);
}

module.exports = getSizes;