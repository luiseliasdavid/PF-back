"use strict";

var express = require("express");

var router = express.Router();

const controllers = require('../controllers/userController')

router.post('/create', controllers.CreateUser)
router.get('/h', controllers.getUser)


module.exports = router;