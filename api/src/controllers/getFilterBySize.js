const { Router } = require('express');
const { Sneakers, colors } = require('../db');

// Crear ruta get, filterBySize para filtrar por talla con sequelize
const router = Router();
router.get('/sneakers', async (req, res, next) => {
	const name = req.query.name;
	const size = req.query.size;

  try {
    const allData = await Sneakers.findAll({
      where: {
        size: size,
      },
    });
    return res.json(allData);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
