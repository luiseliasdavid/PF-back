const {Sneakers} = require('../db')


const getData = async()=> {
    const data = await Sneakers.findAll();
    console.log(data)
    return data
} 



module.exports ={
    //functionName: async (req, res)  => {}
}