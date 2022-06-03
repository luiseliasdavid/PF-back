const { Size } = require("../../db");

const getSizes = async (req, res) => {
  try {
    const sizes = await Size.findAll();
    res.send(sizes);
  } catch (error) {
    console.log("Error fuction getSizes");
  }
};

module.exports = getSizes;
