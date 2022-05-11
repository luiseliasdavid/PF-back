const { Users } = require('../../db')



module.exports = {

  getUsers: async (req, res) => {

    const users = await Users.findAll()
    res.send(users)

  },

  deleteUser: async (req, res) => {
    const { id } = req.params
    if (id) {
      await Users.destroy({
        where: { id: id }
      })
      res.json({ msg: `The user ID: ${id} has been deleted` })
    } else {
      res.status(404).json({ msg: `Ups, something went wrong` })
    }
  }
}