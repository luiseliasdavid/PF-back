const {User} = require("../../db");

const getRole = async (req, res) => {
    const {id} = req.params;
    try {
        const user = await User.findByPk(id);
        console.log(user.typeUser)
        res.send(user.typeUser);
    } catch (error) {
        res.status(500).send({msg: "Something has gone wrong"})
    }
}

module.exports =getRole;