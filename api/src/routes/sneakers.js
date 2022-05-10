'use strict';

var express = require('express');

var router = express.Router();

const controllers = require('../controllers/sneakersController');

router.get('/sort', controllers.OrderingByPrice);
router.get('/', controllers.getSneakers);
router.get('/:id', controllers.SneakerDetail);

module.exports = router;
