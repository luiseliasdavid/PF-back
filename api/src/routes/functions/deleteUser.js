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

  }

}

module.exports = deleteUser;