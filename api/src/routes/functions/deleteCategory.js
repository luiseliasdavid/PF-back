const { Category } = require('../../db')

const deleteCategory = async (req, res) => {

  const { id } = req.params
  try {
    if (id) {
      const cat = await Category.findByPk(id)
      if (!cat) {
        res.status(404).send({ msg: "The category does not exist" });
      }
      if (cat.deleted) {
        res.status(404).send({ msg: "The category  has already been deleted" });
      }
      const newStateCategory = await cat.update({ deleted: true })
      if (newStateCategory) {
        res.json({
          msg: "The category has been deleted",
        });
      } else {
        res.status(404).send({ msg: `Something went wrong` })
      }
    }
  } catch (error) {
    res.status(404).send({ msg: "error" }, error)
  }
}

module.exports = deleteCategory;
