"use strict";

var express = require("express");

var router = express.Router();

const controllers = require('../controllers/sneakersController')

router.get('/', controllers.getSneakers);
router.get('/sort', controllers.OrderingByPrice)



module.exports = router;