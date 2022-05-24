const { Category } = require("../../db");

const getCategories = async (req, res) => {
    const categories = await Category.findAll({ where: { deleted: false } });
    res.send(categories);
}

module.exports = getCategories;

