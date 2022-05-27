const { DataTypes } = require('sequelize');
// const { Size, Model } = require('../db.js');
module.exports = (sequelize) => {
    sequelize.define('modelsize', {
        // Model attributes are defined here
        modelId: {
            type: DataTypes.INTEGER,
            references: {
                model: "model",
                key: 'id'
            }
        },
        sizeId: {
            type: DataTypes.INTEGER,
            references: {
                model: "size",
                key: 'id'
            }
        },
        stock: {
            type: DataTypes.INTEGER
            // allowNull: false
        }
    }, {
        timestamps: false
    });
}
