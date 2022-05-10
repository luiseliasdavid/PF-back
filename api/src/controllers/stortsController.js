const { Sneakers } = require('../db')


const getData = async () => {
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

        let data = Sneakers.findByPk(id)

        if (data) {
            res.send(data)
        } else {
            res.status(404).json({ msg: `Ups, the ID: ${id} is not found` })
        }
    }



}