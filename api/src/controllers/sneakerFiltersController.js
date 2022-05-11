const { Router } = require('express');
const { Op } = require('sequelize');
const { Sneakers, Category, Brand, colors } = require('../db');

const router = Router();

module.exports = {
	// Ruta que filtra del modelo Sneakers por brand e incluye el modelo Brand
	// La relacion entre Sneakers y Category es de muchos a muchos.
	// localhost:3000/sneakers/filters/brand?brand=nike
	filterByBrand: async (req, res) => {
		const { brand } = req.query;
		try {
			const allData = await Sneakers.findAll({
				include: {
					model: Brand,
					attributes: ['name'],
					where: {
						name: {
							[Op.iLike]: `%${brand}%`,
						},
					},
				},
			});

			if (!allData.length) {
				return res.status(404).json({
					message: 'No sneakers found',
				});
			} else {
				return res.status(200).json({
					message: 'Sneakers found',
					sneakers: allData,
				});
			}
		} catch (error) {
			res
				.status(500)
				.json({ message: 'Error fetching sneakers', error: error.message });
		}
	},

  // Ruta que filtra del modelo Sneakers por category e incluye el modelo Category
  // La relacion entre Sneakers y Category es de muchos a muchos.
  // localhost:3000/sneakers/filters/category?category=
	filterByCategory: async (req, res) => {
		const { category } = req.query;
		try {
			const allData = await Sneakers.findAll({
				include: {
					model: Category,
					attributes: ['name'],
					where: {
						name: {
							[Op.iLike]: `%${category}%`,
						},
					},
				},
			});

			if (!allData.length) {
				return res.status(404).json({
					message: 'No sneakers found',
				});
			} else {
				return res.status(200).json({
					message: 'Sneakers found',
					sneakers: allData,
				});
			}
		} catch (error) {
			res
				.status(500)
				.json({ message: 'Error fetching sneakers', error: error.message });
		}
	},

	//Ruta para filtrar por precio
	//localhost:3000/sneakers/filters/price?price=
	filterByPrice: async (req, res) => {
		const { minPrice, maxPrice } = req.query;

		try {
			const allData = await Sneakers.findAll({
				where: {
					price: {
						[Op.between]: [minPrice, maxPrice],
					},
				},
				order: ['price'],
			});

			if (!allData.length) {
				return res.status(404).json({
					message: 'No sneakers found',
				});
			} else {
				return res.status(200).json({
					message: 'Sneakers found',
					sneakers: allData,
				});
			}
		} catch (error) {
			res
				.status(500)
				.json({ message: 'Error fetching sneakers', error: error.message });
		}
	},
};
