const { Sneakers } = require('../db')


const getData = async () => {
    console.log('entando a getData')
    const data = await Sneakers.findAll();
    console.log(data)
    return data
}



module.exports = {
    OrderingByPrice: async (req, res) => {
        const { order } = req.query
        const data = await getData()

        try {
            if (order === 'asc') {
                let newOrder = data.sort((a, b) => a.price - b.price)
                res.send(newOrder)
            } else {
                let newOrder = data.sort((a, b) => b.price - a.price)
                res.send(newOrder)
            }
        } catch (error) {
            console.log(error)
        }
    },

    SneakerDetail: async (req, res) => {
        const { id } = req.params

        let data = await Sneakers.findByPk(id)
        if (data) {
            res.json(data)
        } else {
            res.status(404).json({ msg: `Ups, the ID: ${id} is not found` })
        }
    },

    getSneakers: async (req, res)=>{
        const data = await getData();
        res.json(data)
    }



}