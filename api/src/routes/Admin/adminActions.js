"use strict";

var express = require("express");

var router = express.Router();

const controllers = require('../../controllers/AdminControllers/sneakersControllers')
const usersController = require('../../controllers/AdminControllers/userAccountManag')



router.delete('/delete/sneaker/:id', controllers.deletebdInfo);
router.put('/update/sneaker/:id', controllers.updateProduct)
router.post('/create/sneaker', controllers.createSneaker)
router.get('/getUsers', usersController.getUsers)
router.delete('/delete/user/:id', usersController.deleteUser)
module.exports = router;