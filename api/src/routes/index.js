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
const deleteDiscount = require("./functions/deleteDiscount.js");
const ProtectedRoute = require("../middleware/auth");
const addWishlist = require("./functions/addWishlist.js");
const getWishlist = require("./functions/getWishList");
const deleteWishlist = require("./functions/deleteWishlist.js");

const router = Router();

//admin
router.get("/getUser", ProtectedRoute, getAllUsers)//middleware**+
router.get("/getUserBy/:id", ProtectedRoute, getUserById)//middleware----------------------
router.put("/deleteUser/:id", ProtectedRoute, deleteUser)//middleware**+
router.put("/deleteCategory/:id", ProtectedRoute, deleteCategory)//middleware**+
router.put("/deleteModel/:id", ProtectedRoute, deleteModel)//middleware--------------------
router.put("/updateSneaker/:id", ProtectedRoute, updateSneaker)//middleware**+
router.post("/createCate", ProtectedRoute, createCategory)//middleware**+
router.post("/createModel", ProtectedRoute, createModel)//middleware**+
router.post("/createSneaker", ProtectedRoute, createSneaker)//middleware**+
router.get("/getModels", getModels)
router.get("/getColors", getColors)
router.get("/materials", getMaterials)
router.get("/sizes", getSizes)
router.put("/deleteSneaker/:id",ProtectedRoute, deleteSneaker)//middleware**+
router.put("/updateUser/:id", switchRole);

router.get("/getOrders", ProtectedRoute, getOrders)//middleware**
router.get("/getOrders/:id", ProtectedRoute, getOrdersById)//middleware**
router.get("/getOrdUser/:id", getOrderByUser)//middleware-------No funcional
router.post("/createOrder", ProtectedRoute, createOrder)//middleware**+
router.put("/updateOrder/:id",ProtectedRoute, updateOrder)//middleware**+


//users
router.post("/user", createUser);
router.get("/sneakers", getSneakers);
router.get("/sneakersall", getSneakersAll);
router.get("/brands", getBrands);
router.get("/categories", getCategories);
router.get("/sneaker/:id", getSneakerId);
router.get("/getSneakersCart/:id",ProtectedRoute, getSneakersCart);//middleware------------
router.post("/addonesneakercart", addOneSneakerCart);//check--------------
router.post("/addsneakerscart", addSneakersCart);//check---------
router.post("/addcart",ProtectedRoute, addCart);//middleware------------------
router.post("/getcart",ProtectedRoute, getCart);//middleware------------------
router.post("/deletecart",ProtectedRoute, deleteCart);//middleware**+
router.post("/addwishlist", addWishlist);
router.post("/getwishlist", getWishlist);
router.post("/deletewishlist", deleteWishlist);
//FirebaseAdmin
router.put("/updatedDisableUser/:id", ProtectedRoute, updatedDisableUser);//middleware**

//Payment
router.post("/payment", payment);//middleware

//discount
router.post("/addDiscount/:id", addDiscount)
router.get("/getDiscounts", getDiscounts);
router.put("/deleteDiscount/:id",ProtectedRoute, deleteDiscount);//middleware



//review
router.post("/review", addReview);//middleware**+
router.get("/reviews/:id", getReviews);

router.get("/role/:id", ProtectedRoute, getRole);//middleware**+

module.exports = router;