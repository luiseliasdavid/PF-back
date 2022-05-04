const { Router } = require("express");
const { Sneakers, colors } = require("../db");

const {getApiInfo} = require("../bdInfo/bdInfo");

const router = Router();

router.get("/sneakers", async (req, res, next) => {
  const name = req.query.name;
  const allData = await getApiInfo();
 return res.json(allData);
});


module.exports = router;
