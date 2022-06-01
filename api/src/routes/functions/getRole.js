const {User} = require("../../db");

const getRole = async (req, res) => {
    const {email} = req.params;
    try {
        const user = await User.findOne({where: {email:email}});
        console.log(user.typeUser)
        res.send(user.typeUser);
    } catch (error) {
        res.status(500).send({msg: "Something has gone wrong"})
    }
}

module.exports =getRole;