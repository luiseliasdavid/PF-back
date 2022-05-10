const { Router } = require('express');
const { Sneakers, colors } = require('../db');

const router = Router();

module.exports = {
	//Crear ruta get que filtre por categoria con sequelize
	filterByCategory: async (req, res, next) => {
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
	},

// crear ruta get para filterbybrand con sequelize
filterByBrand: async (req, res, next) => {
  const name = req.query.name;
  const brand = req.query.brand;
  try {
    const allData = await Sneakers.findAll({
      where: {
        brand_name: brand,
      },
    });
    return res.json(allData);
  } catch (error) {
    next(error);
  }
},

// Crear ruta get, filterBySize para filtrar por talla con sequelize
filterBySize: async (req, res, next) => {
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
}
};






// module.exports = router;
