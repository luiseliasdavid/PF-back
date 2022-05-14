const { Router } = require("express");
const { Sneaker, Brand, Category, Color } = require("../db.js");
const { Op } = require("sequelize");

const router = Router();

//!Ruta para obtener todos los sneakers
router.get("/sneakers", async (req, res) => {
    try {
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
                    match: `${element.model.brand.nameBrand}-${element.model.nameModel}-${element.color.nameColor}`,
                    image: element.image,
                    color: element.color.nameColor,
                    description: element.model.description,
                    material: element.model.material.nameMaterial,
                    sizes: element.model.sizes.map(size => {   
                        return{
                        size: size.numberSize,
                        stock : size.modelsize.stock
                        }
                 }),
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

router.get("/sneakersall", async (req, res) => {
    const sneaker = await Sneaker.findAll({
        attributes: { exclude: ['colorId', 'sizeId', 'modelId'] },
        include: { all: true, nested: true }
    });
    res.send(sneaker);
});

router.get("/brands", async (req, res) => {
    const brands = await Brand.findAll();
    res.send(brands);
});

router.get("/categories", async (req, res) => {
    const categories = await Category.findAll();
    res.send(categories);
});

router.get("/sneaker/:id", async (req, res) => {
    const id = req.params.id;
    //brand, model, price, description, size, material, image.
    const sneaker = await Sneaker.findByPk(id);
    res.send(sneaker);
});


module.exports = router;