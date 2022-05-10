const { Router } = require('express');
const { Op } = require('sequelize');
const { Sneakers, Category, Brand, colors } = require('../db');

const router = Router();

module.exports = {
  	//Ruta que filtra del modelo Sneakers por brand y por category, e incluye el modelo Brand y Category
    // La relacion entre Sneakers y Category es de muchos a muchos.
	// localhost:3000/sneakers/filters?brand=&category=
  filterByBrandAndCategory: async (req, res) => {
    try {
      const { brand, category } = req.query;
      const sneakers = await Sneakers.findAll({
        where: {
          [Op.or]: [
            { brand: brand },
            { category: category }
          ]
        },
        include: [
          {
            model: Brand,
            attributes: ['name']
          },
          {
            model: Category,
            attributes: ['name']
          }
        ]
      });
      res.json(sneakers);
    } catch (error) {
      res
      .status(500)
      .send({ message: 'Error al filtrar por marca y categoria' });
    }
  }
}





	// //Ruta que filtra del modelo Sneakers por brand y por category, e incluye el modelo Brand y Category
	// // localhost:3000/sneakers/filters?brand=&category=
	// filterByBrandAndCategory: async (req, res, next) => {
	// 	const brand = req.query.brand;
	// 	const category = req.query.category;
	// 	try {
	// 		const allData = await Sneakers.findAll({
	// 			include: {
	// 				model: Category,
	// 				attributes: ['name'],
	// 				where: {
	// 					name: {
	// 						[Op.iLike]: `%${category}%`,
	// 					},
	// 				},
	// 			},
	// 			// include: {
	// 			// 	model: Brand,
	// 			// 	attributes: ['name'],
	// 			// 	where: {
	// 			// 		name: {
	// 			// 			[Op.iLike]: `%${brand}%`,
	// 			// 		},
	// 			// 	},
	// 			// },
	// 		});


	// 		return res.json(allData);
	// 	} catch (error) {
	// 		res
	// 			.status(500)
	// 			.send({ message: 'Error al filtrar por marca y categoria' });
	// 		// next(error);
	// 	}
	// },





  
	// Crear ruta get, filterBySize para filtrar por talla con sequelize
	// filterBySize: async (req, res, next) => {
	// 	const name = req.query.name;
	// 	const size = req.query.size;

	// 	try {
	// 		const allData = await Sneakers.findAll({
	// 			where: {
	// 				size: size,
	// 			},
	// 		});
	// 		return res.json(allData);
	// 	} catch (error) {
	// 		next(error);
	// 	}
	// },


// module.exports = router;
