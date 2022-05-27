const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('sneaker', {
        // Model attributes are defined here
        price: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        },
        deleted: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        }
    }, {
        timestamps: false
    });

}