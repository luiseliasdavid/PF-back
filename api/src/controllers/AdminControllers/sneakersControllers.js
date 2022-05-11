require('dotenv').config();
const {Sneakers} = require('../../db')
const axios = require('axios')


module.exports= {
        createSneaker: async(req, res)=>{
            const {brand_name, color, details, grid_picture_url, price, name} = req.body;

            try {
                const newSneaker = await Sneakers.create({
                    brand_name: brand_name,
                    color: color,
                    details: details,
                    grid_picture_url: grid_picture_url,
                    price: price,
                    name:name
                })

                res.status(201).json({msg: `the sneaker ${name} has been created`,sneaker: newSneaker})

            } catch (error) {
                res.status(404).send(error)
            }

        },
        updateProduct: async (req, res) => {
            const { id } = req.params
            const changes = req.body
    
            try {
                const sneakerItem = await Sneakers.findOne({
                    where: { id: id }
                })
                const sneakerUpdate = await sneakerItem.update(changes)
                console.log(`prev ${sneakerItem}`)
                console.log(`updated ${sneakerUpdate}`)
                res.json(sneakerUpdate)
            } catch (error) {
                res.status(404).send(error)
            }
        },
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