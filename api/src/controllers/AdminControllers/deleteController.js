require('dotenv').config();
const {Sneakers,Colors} = require('../../db')
const axios = require('axios')


    module.exports= {
    
        deletebdInfo: async (req, res)=>{
          const {id} = req.params;
          try {
            let respuestaB=  await Sneakers.destroy({
                  where: {id:id}  })
            console.log(respuestaB)
            res.json({msg: `the sneaker with id: ${id} has been deleted`})
          } 
          catch (error) {
              res.status(400).send("I can't find the Sneakers" )   
          }
        }
      
    }