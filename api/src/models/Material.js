const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('material', {
        // Model attributes are defined here
        nameMaterial: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: false
    });
}