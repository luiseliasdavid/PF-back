const { DataTypes } = require('sequelize');

// Se relaciona con id de usuario
module.exports = (sequelize) => {
	sequelize.define(
		'order',
		{
			// paymentStatus es para saber si el pago fue realizado o no
			paymentStatus: {
				type: DataTypes.ENUM(
					'On Cart',
					'Creada',
					'Procesando',
					'Cancelada',
					'Completa'
				),
				defaultValue: 'On Cart',
				allowNull: false,
			},
			// orderdate es para saber cuando se creo el pedido
			orderDate: {
				type: DataTypes.DATE,
				defaultValue: DataTypes.NOW,
				allowNull: false,
			},
			total: {
				type: DataTypes.DECIMAL(10, 2),
				defaultValue: 0,
				allowNull: false,
			},
		},

		{
			timestamps: false,
		}
	);
};
