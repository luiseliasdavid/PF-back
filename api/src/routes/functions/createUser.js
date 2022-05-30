const {User} = require("../../db");
const { encryptPass } = require("../../utils/encrypt");

const createUser =async (req, res) => {
    const { id,name, email } = req.body;
    // const encryptPassword = encryptPass(password);
    const [user, created] = await User.findOrCreate({
        where: { email: email },
        defaults: {
            id,
            nameUser: name,
            email: email
        }
    })
    if (created) {
        res.status(201).send({ msg: "Se creó correctamente" });
    } else {
        res.send({ msg: "Email registrado" });
    }
}

module.exports=createUser;