const { Sneaker } = require("../../db");

const getSneakerId = async (req, res) => {
    const { id } = req.params;
    //brand, model, price, description, size, material, image.
    const sneaker = await Sneaker.findOne(
        {
            where: { id: id },
            attributes: { exclude: ['colorId', 'modelId'] },
            include: { all: true, nested: true }
        }
    )
    if (sneaker) {
        const sneakerToJson = JSON.stringify(sneaker, null, 2);
        const jsonToObject = JSON.parse(sneakerToJson);
        let obj = {
            id: jsonToObject.id,
            model: jsonToObject.model.nameModel,
            brand: jsonToObject.model.brand.nameBrand,
            price: jsonToObject.price,
            discountPrice: jsonToObject.discountPrice,
            match: `${jsonToObject.model.brand.nameBrand}-${jsonToObject.model.nameModel}-${jsonToObject.color.nameColor}`,
            image: jsonToObject.image,
            color: jsonToObject.color.nameColor,
            description: jsonToObject.model.description,
            material: jsonToObject.model.material.nameMaterial,
            deleted: jsonToObject.deleted,
            rating: jsonToObject.rating,
            sizes: jsonToObject.model.sizes.map(size => {
                return {
                    size: size.numberSize,
                    stock: size.modelsize.stock
                }
            }),
            categories: jsonToObject.model.categories.map(category => {
                return (
                    category.nameCategory
                )
            })
        }
        res.send(obj);
    } else {
        res.json({ msg: "id no válido" });
    }
}

module.exports = getSneakerId;

