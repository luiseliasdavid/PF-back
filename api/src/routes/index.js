const { Router } = require("express");
const { Sneaker, Brand, Category, User } = require("../db.js");
const { encryptPass } = require("../utils/encrypt.js");

const router = Router();

//!Ruta para obtener todos los sneakers
router.get("/sneakers", async (req, res) => {

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
})

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
            match: `${jsonToObject.model.brand.nameBrand}-${jsonToObject.model.nameModel}-${jsonToObject.color.nameColor}`,
            image: jsonToObject.image,
            color: jsonToObject.color.nameColor,
            description: jsonToObject.model.description,
            material: jsonToObject.model.material.nameMaterial,
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
});

router.post("/user", async (req, res) => {
    const { name, email, password } = req.body;
    console.log(name, email, password)
    const encryptPassword = encryptPass(password);
    const [user, created] = await User.findOrCreate({
        where: { email: email },
        defaults: {
            nameUser: name, email: email, password: encryptPassword
        }
    })
    console.log(created)
    if (created) {
        res.send({ msg: "Se creó correctamente" });
    } else {
        res.send({ msg: "Email registrado" });
    }
});


module.exports = router;