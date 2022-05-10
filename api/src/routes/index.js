const { Router } = require("express");
const { Sneakers, colors } = require("../db");

const { getApiInfo } = require('../bdInfo/controlers')


const usersRoutes = require('./users')
const sneakersRoutes = require('./sneakers')



const router = Router();

// router.get("/sneakers", async (req, res, next) => {
//   const name = req.query.name;
//   const allData = await getApiInfo();
//  return res.json(allData);
// });


router.use('/users', usersRoutes);
router.use('/sneakers', sneakersRoutes);



module.exports = router;
