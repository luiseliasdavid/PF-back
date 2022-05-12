const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define(
		'sneakers',
		{
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			color: {
				type: DataTypes.STRING,
			},
			details: {
				type: DataTypes.STRING,
			},
			grid_picture_url: {
				type: DataTypes.STRING,
			},
			price: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			sizes: {
				type: DataTypes.ARRAY(DataTypes.JSONB),
				allowNull: false,
			},
			brand_name: {
				type: DataTypes.STRING,
				

			}
		},
		{
			timestamps: false,
		}
	);
};
