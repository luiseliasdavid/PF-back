const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('sneaker', {
        // Model attributes are defined here
        price: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        discountPrice: {
            type: DataTypes.FLOAT,
            defaultValue: 0,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        },
        rating:{
            type: DataTypes.FLOAT,
            defaultValue: 0,
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