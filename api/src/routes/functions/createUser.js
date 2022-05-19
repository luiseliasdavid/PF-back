const {User} = require("../../db");
const { encryptPass } = require("../../utils/encrypt");

const createUser =async (req, res) => {
    const { name, email, password } = req.body;
    const encryptPassword = encryptPass(password);
    const [user, created] = await User.findOrCreate({
        where: { email: email },
        defaults: {
            nameUser: name, email: email, password: encryptPassword
        }
    })
    if (created) {
        res.send({ msg: "Se creó correctamente" });
    } else {
        res.send({ msg: "Email registrado" });
    }
}

module.exports=createUser;