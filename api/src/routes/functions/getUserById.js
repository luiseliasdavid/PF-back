const { User } = require("../../db")

const getUserById = async (req, res) => {

  const { id } = req.params

  if (id) {
    try {
      const user = await User.findByPk(id, {
        include: {
          model: Order,
          attributes: ["state", "id"],
          through: {
            attributes: []
          }
        }
      })
      res.send(user)
    } catch (error) {
      res.status(404).send(error)
    }
  } else {
    res.status(404).send(error)
  }


}

module.exports = getUserById;
