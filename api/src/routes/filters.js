'use strict';

var express = require('express');

var router = express.Router();

const filterControllers = require('../controllers/sneakerFiltersController');

router.get('/category', filterControllers.filterByCategory);
router.get('/brand', filterControllers.filterByBrand);
router.get('/price', filterControllers.filterByPrice);


module.exports = router;
