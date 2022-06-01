const { Router } = require("express");
const addOneSneakerCart = require("./functions/addOneSneakerCart.js");
const addSneakersCart = require("./functions/addSneakersCart.js");
const addCart = require("./functions/addCart.js");
const getCart = require("./functions/getCart.js");
const deleteCart = require("./functions/deleteCart.js");
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
const getModels = require("./functions/getModels")
const getColors = require("./functions/getColors");
const getMaterials = require("./functions/getMaterials")
const getSizes = require("./functions/getSizes");
const deleteSneaker = require("./functions/deleteSneaker.js");
const deleteModel = require("./functions/deleteModel.js");
const updateSneaker = require("./functions/updateSneaker.js");
const createOrder = require("./functions/createOrder.js");
const getOrders = require("./functions/getOrders.js")
const getOrdersById = require("./functions/getOrderById");
const getUserById = require("./functions/getUserById.js");
const getOrderByUser = require("./functions/getOrderByUser.js");
const addReview = require("./functions/addReview.js");
const getReviews = require("./functions/getReview.js");
const updateOrder = require("./functions/updateOrder")
const getRole = require("./functions/getRole.js");
const decodeToken = require("../middleware/auth");
const addDiscount = require("./functions/addDiscount.js");
const updatedDisableUser = require("./functions/updatedDisableUser.js");
const createHot = require("./functions/postCounter.js");
const switchRole = require("./functions/switchRole.js");
const getDiscounts = require("./functions/getDiscounts.js");

const router = Router();

//admin
router.get("/getUser", getAllUsers)//middleware
router.get("/getUserBy/:id", getUserById)//middleware
router.put("/deleteUser/:id", deleteUser)//middleware
router.put("/deleteCategory/:id", deleteCategory)//middleware
router.put("/deleteModel/:id", deleteModel)//middleware
router.put("/updateSneaker/:id", updateSneaker)//middleware
router.post("/createCate", createCategory)//middleware
router.post("/createModel", createModel)//middleware
router.post("/createSneaker", createSneaker)//middleware
router.get("/getModels", getModels)
router.get("/getColors", getColors)
router.get("/materials", getMaterials)
router.get("/sizes", getSizes)
router.put("/deleteSneaker/:id", deleteSneaker)//middleware
router.put("/updateUser/:id", switchRole);

router.get("/getOrders", getOrders)//middleware
router.get("/getOrders/:id", getOrdersById)//middleware
router.get("/getOrdUser/:id", getOrderByUser)//middleware
router.post("/createOrder", createOrder)//middleware
router.put("/updateOrder/:id", updateOrder)//middleware


//users
router.post("/user", createUser);
router.get("/sneakers", getSneakers);
router.get("/sneakersall", getSneakersAll);
router.get("/brands", getBrands);
router.get("/categories", getCategories);
router.get("/sneaker/:id", getSneakerId);
router.get("/getSneakersCart/:id", getSneakersCart);//middleware
router.post("/addonesneakercart", addOneSneakerCart);//check
router.post("/addsneakerscart", addSneakersCart);//check
router.post("/addcart", addCart);//middleware
router.post("/getcart", getCart);//middleware
router.post("/deletecart", deleteCart);//middleware

//FirebaseAdmin
router.put("/updatedDisableUser", updatedDisableUser);//middleware

//counter
router.post("/counter", createHot);//check
//Payment
router.post("/payment", payment);//middleware

//discount
router.post("/addDiscount/:id", addDiscount)
router.get("/getDiscounts", getDiscounts);



//review
router.post("/review", addReview);//middleware
router.get("/reviews/:id", getReviews);

router.get("/role/:id", getRole);//middleware

module.exports = router;