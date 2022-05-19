const { Category } = require('../../db')

const deleteCategory = async (req, res) => {

  const { id } = req.params
  const category = await Category.findAll()
  const checked = category.filter(el => el.id === id)

  if (checked) {
    try {
      return res.json(await Category.destroy({
        where: { id: id }
      }))
    } catch (error) {
      res.status(404).send(error)
    }
  } else {
    res.status(404).send(error)

  }

}

module.exports = deleteCategory;