const { Router } = require("express");
const { Sneakers, colors } = require("../db");

const router = Router();


// crear ruta get para filterbybrand con sequelize
router.get("/sneakers/", async (req, res, next) => {
  const name = req.query.name;
  const brand = req.query.brand;
  try {
    const allData = await Sneakers.findAll({
      where: {
        brand: brand,
      },
    });
    return res.json(allData);
  } catch (error) {
    next(error);
  }
}
);
