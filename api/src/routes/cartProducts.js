"use strict";

var express = require("express");

var router = express.Router();

const controllers = require('../controllers/productsCartController')

router.post('/add', controllers.AddCartProduct);
router.get('/get/:id', controllers.GetCartProducts);
router.delete('/delete/:id', controllers.DeleteCartProduct);

module.exports = router;