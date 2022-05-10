const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define("review",
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
                primaryKey: true
            },
            idSneaker: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            idUser: {
                type: DataTypes.UUID,
                allowNull: false
            },
            reviewText: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            rating: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        },
        {
            timestamps: false,
        }
    );
};
