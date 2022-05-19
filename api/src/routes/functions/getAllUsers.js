const { User } = require('../../db')

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll()
    console.log(users)
    res.send(users)

  } catch (error) {
    res.status(404).send('Uos, something went wrong', error)
  }

}

module.exports = getAllUsers;