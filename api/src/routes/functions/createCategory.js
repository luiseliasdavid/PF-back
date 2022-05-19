const { Category } = require("../../db")

const createCategory = async (req, res) => {

  const { nameCategory } = req.body

  const category = await Category.create({
    nameCategory
  })

  res.status(201).json(category)

}

module.exports = createCategory