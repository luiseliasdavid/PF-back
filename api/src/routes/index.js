const { Router } = require("express");
const { Sneakers, colors } = require("../db");

const { getApiInfo } = require('../bdInfo/controlers')

const { deletebdInfo } = require('../bdInfo/deleteController')




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













































router.delete("/sneakers/delete/:id",async (req, res, next) => {
  const idSneaker= req.params.id
  //console.log("id de params ruta delete", idSneaker)
try {
  let resultado= await deletebdInfo(idSneaker)
if(resultado)  
res.status(200).send("Sneaker deleted")
  else res.status(400).send("we have a problem in deleted route")
} catch (error) {
  //console.log("We have a problem in Delete Route")
}

});