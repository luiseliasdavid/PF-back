const { User } = require('../../db')

const deleteUser = async (req, res) => {

  const { id } = req.params
  const users = await User.findAll()
  const checked = users.filter(el => el.id == id)

  if (checked) {
    try {
      const name = checked[0].nameUser
      await User.destroy({
        where: { id: id }
      })
      return res.json({msg: `the user ${name} with the id: ${id} has been deleted`})
    } catch (error) {
      res.status(404).send(error)
    }
  } else {
    res.status(404).send(error)

  }

}

module.exports = deleteUser;