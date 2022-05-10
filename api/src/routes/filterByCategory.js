const { Router } = require("express");
const { Sneakers, colors } = require("../db");


const router = Router();

//Crear ruta get que filtre por categoria con sequelize

router.get("/sneakers", async (req, res, next) => {
  const name = req.query.name;
  const category = req.query.category;
  try {
    const allData = await Sneakers.findAll({
      where: {
        category: category,
      },
    });
    return res.json(allData);
  } catch (error) {
    next(error);
  }
}
);

