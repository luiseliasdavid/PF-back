const { Router } = require("express");
const { Sneaker } = require("../db.js");
const router = Router();

//!Ruta para obtener todos los sneakers
router.get("/sneakers", async (req, res) => {
    try {
        const sneaker = await Sneaker.findAll({
            attributes: { exclude: ['colorId', 'sizeId', 'modelId'] },
            include: { all: true, nested: true }
        });
        const sneakerToJson = JSON.stringify(sneaker, null, 2);
        const jsonToObject = JSON.parse(sneakerToJson)
        const arraySneaker = [];
        jsonToObject.forEach(element => {
            let obj = {
                id: element.id,
                stock: element.stock,
                price: element.price,
                image: element.image,
                color: element.color.nameColor,
                size: element.size.numberSize,
                model: element.model.nameModel,
                description: element.model.description,
                brand: element.model.brand.nameBrand,
                material: element.model.material.nameMaterial,
                categories: element.model.categories.map(category => {
                    return (
                        category.nameCategory
                    )
                })
            }
            arraySneaker.push(obj);
        });
        res.send(arraySneaker);
    } catch (error) {
        console.log(error)
    }

});

module.exports = router;