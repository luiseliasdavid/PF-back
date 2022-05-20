const {User,Sneaker} = require("../../db");

const addOneSneakerCart = async (req,res)=>{
    const{email,sneakerId}=req.body;
    const user = await User.findOne({
        where:{email:email}
    })
    const sneaker = await Sneaker.findOne({
        where:{id:sneakerId}
    })
    user.addSneaker(sneaker,{ through: { quantity: 1 }})
    res.send('Producto agregado')
}

module.exports = addOneSneakerCart;