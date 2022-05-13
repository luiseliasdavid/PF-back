
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('sneaker', {
        // Model attributes are defined here
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: false
    });

}