const { Category } = require("../../db");

const getCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.send(categories);
  } catch (error) {
    console.log("Error fuction getCategories");
  }
};

module.exports = getCategories;
