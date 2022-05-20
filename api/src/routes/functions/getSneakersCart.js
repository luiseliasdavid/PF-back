const {User,Sneaker} = require("../../db");

const getSneakersCart = async (req,res)=>{
    const {id} = req.params;

    const sneakers =await User.findOne({
        where:{
           id:id 
        },
        include:Sneaker
    })

    res.send(sneakers)
}

module.exports = getSneakersCart;