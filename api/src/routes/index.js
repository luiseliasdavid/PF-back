const { Router } = require("express");

const addOneSneakerCart = require("./functions/addOneSneakerCart.js");
const addSneakersCart = require("./functions/addSneakersCart.js");
const createUser = require("./functions/createUser.js");
const getBrands = require("./functions/getBrands.js");
const getCategories = require("./functions/getCategories.js");
const getSneakerId = require("./functions/getSneakerId.js");
const getSneakers =require('./functions/getSneakers');
const getSneakersAll = require("./functions/getSneakersAll.js");
const getSneakersCart = require("./functions/getSneakersCart.js");

const router = Router();


router.get("/sneakers", getSneakers);
router.get("/sneakersall",getSneakersAll);
router.get("/brands", getBrands);
router.get("/categories",getCategories);
router.get("/sneaker/:id",getSneakerId );
router.get("/getSneakersCart/:id",getSneakersCart);

router.post("/user", createUser);
router.post("/addonesneakercart", addOneSneakerCart);
router.post("/addsneakerscart", addSneakersCart);




module.exports = router;