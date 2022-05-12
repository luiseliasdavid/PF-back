const { Router } = require('express');
const { Op } = require('sequelize');
const { Brand } = require('../db');

const router = Router();

module.exports = {
	// Ruta para traer las brands, sino hay brands precarga algunas en base de datos.
	// localhost:3000/brands
	getBrands: async (req, res) => {
		try {
			// Se busca en BD si existen brands
			const brands = await Brand.findAll();

			// Sino existen brands en BD se cargan algunas por defecto
			if (!brands.length) {
				const brands = await Brand.bulkCreate([
					{ name: 'nike' },
					{ name: 'adidas' },
					{ name: 'air jordan' },
					{ name: 'converse' },
					{ name: 'vans' }, 
					{ name: 'champion' },
				]);
				res.send(brands);
			}
			res.send(brands);
		} catch (error) {}
	},
};
