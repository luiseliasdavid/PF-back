const { User } = require('../../db')

const deleteUser = async (req, res) => {

  const { id } = req.params
  const users = await User.findAll()
  const checked = users.filter(el => el.id == id)

  if (checked) {
    try {
      return res.json(await User.destroy({
        where: { id: id }
      }))
    } catch (error) {
      res.status(404).send(error)
    }
  } else {
    res.status(404).send(error)

    try {
      if (id) {
        const userr = await User.findByPk(id)
        if (!userr) {
          res.status(404).send({ msg: "The user does not exist" });
        }
        if (userr.deleted) {
          res.status(404).send({ msg: "The user has already been deleted" });
        }
        const newStateUser = await userr.update({ deleted: true })
        if (newStateUser) {
          res.json({
            msg: "The user has been deleted",
          });
        } else {
          res.status(404).send({ msg: `Something went wrong` })
        }
      }
    } catch (error) {
      res.status(404).send({ msg: "error" }, error)
    }

  }
}
module.exports = deleteUser;