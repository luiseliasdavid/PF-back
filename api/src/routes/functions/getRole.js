const { User } = require("../../db");

const getRole = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findByPk(id);
    if (user) {
      console.log(user.typeUser);
      res.send(user.typeUser);
    } else {
      res.send("not user");
    }
  } catch (error) {
    console.log("Error fuction getRole");
  }
};

module.exports = getRole;
