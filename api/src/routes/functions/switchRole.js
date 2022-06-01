const { User } = require("../../db")

const switchRole = async (req, res) => {
    const id= req.params.id;
    const {role} = req.body;
    const user =await User.findByPk(id);
    if(user && role){
        if(role === "admin"){
            user.typeUser = "admin"
           await user.save();
           res.json({msg: `${user.id} now is updated ${user.typeUser}`});    
        }else{
          user.typeUser = "client"
           await user.save();  
             res.json({msg: `${user.id} now is updated ${user.typeUser}`});
        }               
    }else{
        res.send("no ingreso");  
    }
        
}

module.exports = switchRole;