const { Router } = require('express');
const { Op } = require('sequelize');
const { Category } = require('../db');

const router = Router();

module.exports = {
	// Ruta para traer las categories, sino hay categories precarga algunas en base de datos.
	// localhost:3000/categories
	getCategories: async (req, res) => {
		try {
			// Se busca en BD si existen categories
			const category = await Category.findAll();

			// Sino existen categories en BD se cargan algunas por defecto
			if (!category.length) {
				const category = await Category.bulkCreate([
					{ name: 'basketball' },
					{ name: 'lifestyle' },
					{ name: 'running' },
					{ name: 'skateboarding' },
				]);
				res.send(category);
			}
			res.send(category);
		} catch (error) {}
	},
};
