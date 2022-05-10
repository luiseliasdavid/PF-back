const { DataTypes } = require('sequelize');

//Se relaciona con id de ORDER e id de PRODUCT
module.exports = (sequelize) => {
	sequelize.define(
		'order_detail',
		{
			// quantity es para saber cuantos productos se compro
			quantity: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			// price es para saber cuanto costo el producto
			price: {
				type: DataTypes.FLOAT,
				allowNull: false,
			},
		},
		{
			timestamps: false,
		}
	);
};
