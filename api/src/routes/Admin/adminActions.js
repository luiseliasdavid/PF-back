"use strict";

var express = require("express");

var router = express.Router();

const controllers = require('../../controllers/AdminControllers/sneakersControllers')


router.delete('/delete/sneaker/:id', controllers.deletebdInfo);
router.put('/update/sneaker/:id', controllers.updateProduct)
router.post('/create/sneaker', controllers.createSneaker)
module.exports = router;