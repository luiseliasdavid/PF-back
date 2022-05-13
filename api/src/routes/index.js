const { Router } = require("express");
const { Sneaker, Color, Size, ModelShoe, Material, Brand } = require("../db.js");
const router = Router();
router.get("/sneakers", async (req, res) => {
    const sneaker = await Sneaker.findAll({
        // attributes: { exclude: ['colorId', 'sizeId', 'modelShoeId'] },
        include: { all: true, nested: true }

        // include: [{
        //     model: ModelShoe,
        //     required: true,
        //     include: [{
        //         model: Brand,
        //         required: true,
        //     }]
        // }]
    });
    res.json(sneaker);
});

module.exports = router;