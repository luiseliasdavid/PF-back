'use strict';

var express = require('express');

var router = express.Router();

const filterControllers = require('../controllers/sneakerFiltersController');

router.get('/', filterControllers.filterByBrandAndCategory);

module.exports = router;
