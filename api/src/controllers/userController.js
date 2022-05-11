const { Users, Reviews } = require('../db')


module.exports = {
  CreateUser: async (req, res) => {

    const { name, lastName, dateOfBirth, email, password } = req.body

    if (name && lastName && dateOfBirth && email && password) {
      try {
        let newUser = await Users.create({
          name: name,
          lastName: lastName,
          dateOfBirth: dateOfBirth,
          email: email,
          password: password
        })
        res.status(201).json({ msg: `The user ${newUser.name} has been created successfully`, user: newUser })
      } catch (error) {
        console.log(error)
        res.status(404).json({ msg: `Ups, something went wrong ` })
      }
    }

  },

  postReview: (req, res) => {
    const { idUser, reviewText, rating } = req.body
    
    if (idUser && reviewText && rating) {
      try {
        Reviews.create({
          reviewText,
          rating,
          idUser,
          idSneaker: req.params.id
        }).then(review => { res.json(review); }).catch(error => { res.status(400).json({ error }) });

      } catch (error) {
        console.log(error)
        res.status(404).json({ msg: `Ups, something went wrong ` })
      }
    }

  },

}
