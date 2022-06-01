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
const OrdersFiltered = require("./functions/OrdersFiltered.js");

const router = Router();

//admin
router.get("/getUser", getAllUsers)
router.get("/getUserBy/:id", getUserById)
router.put("/deleteUser/:id", deleteUser)
router.put("/deleteCategory/:id", deleteCategory)
router.put("/deleteModel/:id", deleteModel)
router.put("/updateSneaker/:id", updateSneaker)
router.post("/createCate", createCategory)
router.post("/createModel", createModel)
router.post("/createSneaker", createSneaker)
router.get("/getModels", getModels)
router.get("/getColors", getColors)
router.get("/materials", getMaterials)
router.get("/sizes", getSizes)
router.put("/deleteSneaker/:id", deleteSneaker)
router.get("/filterOrders", OrdersFiltered)

router.get("/sneakers", getSneakers);
router.get("/sneakersall", getSneakersAll);
router.get("/brands", getBrands);
router.get("/categories", getCategories);
router.get("/sneaker/:id", getSneakerId);
router.get("/getSneakersCart/:id", getSneakersCart);
router.get("/getUser", getAllUsers)
router.delete("/deleteUser", deleteUser)
router.get("/getOrders", getOrders)
router.get("/getOrders/:id", getOrdersById)
router.get("/getOrdUser/:id", getOrderByUser)
router.post("/createOrder", createOrder)
router.put("/updateOrder/:id", updateOrder)


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
router.post("/addcart", addCart);
router.post("/getcart", getCart);
router.post("/deletecart", deleteCart);

//Payment
router.post("/payment", payment);

//discount
router.post("/addDiscount/:id", addDiscount)


//review
router.post("/review", addReview);
router.get("/reviews/:id", getReviews);

router.get("/role/:id", getRole);

module.exports = router;