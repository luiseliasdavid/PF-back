const { User } = require("../../db");

const createUser = async (req, res) => {
  try {
    const { id, name, email } = req.body;
    const [user, created] = await User.findOrCreate({
      where: { email: email },
      defaults: {
        id,
        nameUser: name,
        email: email,
      },
    });
    if (created) {
      res.status(201).send({ msg: "Se creó correctamente" });
    } else {
      res.send({ msg: "Email registrado" });
    }
  } catch (error) {
    console.log("Error fuction createUser");
  }
};

module.exports = createUser;
