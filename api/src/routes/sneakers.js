'use strict';

var express = require('express');

var router = express.Router();

const controllers = require('../controllers/sneakersController');
// const filterBrandController = require('../controllers/filterByBrand')
// const filterCategoryController = require('../controllers/filterByCategory')
// const filterSizeController = require('../controllers/filterBySize')
const filterControllers = require('../controllers/sneakerFiltersController');

router.get('/sort', controllers.OrderingByPrice);
router.get('/', controllers.getSneakers);
router.get('/:id', controllers.SneakerDetail);
router.get('/filters/catetory', filterControllers.filterByCategory);
router.get('/filters/size', filterControllers.filterBySize);
router.get('/filters/brand', filterControllers.filterByBrand);

module.exports = router;
