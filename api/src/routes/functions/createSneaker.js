const { Sneaker, Color, Model } = require("../../db")

const createSneaker = async (req, res) => {
    const data = req.body

    const [color, createdColor] = await Color.findOrCreate({
        where: { nameColor: data.color }
    });
    const modelo = await Model.findOne({
        where: { nameModel: data.model }
    });
    if (!modelo) {
        res.json({msg: `the model is invalid`})
    }
    const col = color.toJSON() || createdColor.toJSON();
    const mod = modelo.toJSON();

    try {
        const newSneaker = await Sneaker.create({ price: data.price, image: data.image, colorId: col.id, modelId: mod.id })
        res.json({msg: `the sneaker ${col.nameColor} ${mod.nameModel} has been created`, sneaker: newSneaker})
    } catch (error) {
        res.json({msg: error})
    }
    

}

module.exports = createSneaker;
