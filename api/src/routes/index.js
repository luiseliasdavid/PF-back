const { Router } = require("express");

const addOneSneakerCart = require("./functions/addOneSneakerCart.js");
const addSneakersCart = require("./functions/addSneakersCart.js");
const createUser = require("./functions/createUser.js");
const getBrands = require("./functions/getBrands.js");
const getCategories = require("./functions/getCategories.js");
const getSneakerId = require("./functions/getSneakerId.js");
const getSneakers = require('./functions/getSneakers');
const getSneakersAll = require("./functions/getSneakersAll.js");
const getSneakersCart = require("./functions/getSneakersCart.js");
const getAllUsers = require("./functions/getAllUsers.js");
const deleteUser = require("./functions/deleteUser.js");
const createCategory = require("./functions/createCategory.js");
const getAllCategories = require("./functions/getAllCategories.js");
const deleteCategory = require("./functions/deleteCategory.js");
const createProduct = require("./functions/createProduct.js");

const router = Router();


//admin
router.get("/getUser", getAllUsers)
router.get("/getAllCat", getAllCategories)
router.delete("/deleteUser/:id", deleteUser)
router.delete("/deleteCat/:id", deleteCategory)
router.post("/createCate", createCategory)
router.post("/createProduct", createProduct)

//users
router.post("/user", createUser);
router.get("/sneakers", getSneakers);
router.get("/sneakersall", getSneakersAll);
router.get("/brands", getBrands);
router.get("/categories", getCategories);
router.get("/sneaker/:id", getSneakerId);
router.get("/getSneakersCart/:id", getSneakersCart);
router.post("/addonesneakercart", addOneSneakerCart);
router.post("/addsneakerscart", addSneakersCart);




module.exports = router;