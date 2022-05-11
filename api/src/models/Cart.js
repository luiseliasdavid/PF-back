const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define("carts",
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
                primaryKey: true
            },
            size: {
                type: DataTypes.STRING,
                allowNull: false
            },
            amount: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
        },
        {
            timestamps: false,
        }
    );
};