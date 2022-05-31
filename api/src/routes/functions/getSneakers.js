const { Sneaker } = require("../../db");


const getSneakers = async (req, res) => {

    const sneaker = await Sneaker.findAll({
        attributes: { exclude: ['colorId', 'modelId'] },
        include: { all: true, nested: true }
    });
    const sneakerToJson = JSON.stringify(sneaker, null, 2);
    const jsonToObject = JSON.parse(sneakerToJson);
    const arraySneaker = [];
    jsonToObject.forEach(element => {

        let obj = {
            id: element.id,
            model: element.model.nameModel,
            brand: element.model.brand.nameBrand,
            price: element.price,
            discountPrice: element.discountPrice,
            match: `${element.model.brand.nameBrand}-${element.model.nameModel}-${element.color.nameColor}`,
            image: element.image,
            color: element.color.nameColor,
            description: element.model.description,
            rating: element.rating,
            deleted: element.deleted,
            material: element.model.material.nameMaterial,
            sizes: element.model.sizes.map(size => {
                return {
                    size: size.numberSize,
                    stock: size.modelsize.stock
                }
            }),
            categories: element.model.categories.map(category => {
                return (
                    category.nameCategory
                )
            })
        }
        arraySneaker.push(obj);
    })
    res.json(arraySneaker);
}

module.exports = getSneakers;

