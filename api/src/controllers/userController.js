const { Users } = require('../db')

module.exports = {
  CreateUser: async (req, res) => {

    const { name, lastname, dateOfBirth, email, password } = req.body

    if (name, lastname, dateOfBirth, email, password) {
      try {
        let newUser = await userrrr.create({
          name,
          lastname,
          dateOfBirth,
          email,
          password
        })

        res.status(201).json({ msg: `The user ${newUser.name} has been created successfully`, user: newUser })
      } catch (error) {
        res.status(404).json({ msg: `Ups, something went wrong ` })
      }
    }

  }
}
