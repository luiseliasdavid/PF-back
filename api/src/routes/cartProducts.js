"use strict";

var express = require("express");

var router = express.Router();

const controllers = require('../controllers/productsCartController')

router.post('/', controllers.AddProduct);
router.get('/:id', controllers.GetProducts);

module.exports = router;