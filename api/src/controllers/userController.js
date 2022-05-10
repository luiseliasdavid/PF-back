const { Users } = require('../db')


module.exports = {
  CreateUser: async (req, res) => {

    const { name, lastName, dateOfBirth, email, password } = req.body
    console.log(name)
    if (name && lastName && dateOfBirth && email && password) {
      try {
        let newUser = await Users.create({
          name:name,
          lastName: lastName,
          dateOfBirth: dateOfBirth,
          email: email,
          password:password
        })
        res.status(201).json({ msg: `The user ${newUser.name} has been created successfully`, user: newUser })
      } catch (error) {
        console.log(error)
        res.status(404).json({ msg: `Ups, something went wrong ` })
      }
    }

  },
  getUser: (req, res)=>{
    res.status(201).json({ msg: `hello`})
  }
}
