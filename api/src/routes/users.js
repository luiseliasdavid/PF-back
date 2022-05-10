"use strict";

var express = require("express");

var router = express.Router();

const controllers = require('../controllers/userController')

router.post('/create/user', controllers.CreateUser)
router.post('/create/review/:id', controllers.postReview)


module.exports = router;