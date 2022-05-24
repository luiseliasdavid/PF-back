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
const deleteCategory = require("./functions/deleteCategory.js");
const createModel = require("./functions/createModel.js");
const createSneaker = require('./functions/createSneaker');
const payment = require("./functions/payment.js");
const getModels = require('./functions/getModels')
const getColors = require('./functions/getColors')
const getMaterials = require('./functions/getMaterials')
const getSizes = require('./functions/getSizes')




const router = Router();


//admin
router.get("/getUser", getAllUsers)
router.delete("/deleteUser/:id", deleteUser)
router.delete("/deleteCat/:id", deleteCategory)
router.post("/createCate", createCategory)
router.post("/createModel", createModel)
router.post("/createSneaker", createSneaker)
router.get("/getModels", getModels)
router.get("/getColors", getColors)
router.get("/materials", getMaterials)
router.get("/sizes", getSizes)

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

//Payment
router.post("/payment", payment);



module.exports = router;