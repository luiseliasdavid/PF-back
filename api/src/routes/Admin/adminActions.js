"use strict";

var express = require("express");

var router = express.Router();

const controllers = require('../../controllers/AdminControllers/deleteController')

router.delete('/delete/:id', controllers.deletebdInfo);

module.exports = router;