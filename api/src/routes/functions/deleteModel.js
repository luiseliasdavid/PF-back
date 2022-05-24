const { Model } = require('../../db')

const deleteModel = async (req, res) => {

  const { id } = req.params
  try {
    if (id) {
      const mod = await Model.findByPk(id)
      if (!mod) {
        res.status(404).send({ msg: "The model does not exist" });
      }
      if (mod.deleted) {
        res.status(404).send({ msg: "The model has already been deleted" });
      }
      const newStateModel = await mod.update({ deleted: true })
      if (newStateModel) {
        res.json({
          msg: "The model has been deleted",
        });
      } else {
        res.status(404).send({ msg: `Something went wrong` })
      }
    }
  } catch (error) {
    res.status(404).send({ msg: "error" }, error)
  }

}

module.exports = deleteModel;