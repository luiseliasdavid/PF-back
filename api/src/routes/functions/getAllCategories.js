const { Category } = require("../../db")

const getAllCategories = async (req, res) => {

  try {
    const all = await Category.findAll()
    res.send(all)
  } catch (error) {
    res.status(404).send(error)
  }
}

module.exports = getAllCategories