const { Color } = require("../../db");

const getColors = async (req, res) => {
  try {
    const colors = await Color.findAll();
    console.log(colors);
    res.json(colors);
  } catch (error) {
    console.log("Error fuction getColors");
  }
};

module.exports = getColors;
