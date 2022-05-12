const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define(
		'brand',
		{
			id: {
				type: DataTypes.UUID,
				allowNull: false,
				defaultValue: DataTypes.UUIDV4,
			},
			name: {
				
				type: DataTypes.STRING,
				allowNull: false,
				primaryKey: true,
			},
		},
		{
			timestamps: false,
		}
	);
};
