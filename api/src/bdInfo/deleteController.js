require('dotenv').config();
const {Sneakers,Colors} = require('../db')
const axios = require('axios')
const respuesta = require('./respuesta.json');
const res = require('express/lib/response');

const deletebdInfo= async(id) => {
    try {
      let respuestaB=  await Sneakers.destroy({
           where: {id:id}  })
     return respuestaB
    } 
  catch (error) {
      res.status(400).send("I can't find the Sneakers" )   
   }
}
    module.exports= {
    
        deletebdInfo }