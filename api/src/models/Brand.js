const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('brand', {
        // Model attributes are defined here
        nameBrand: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    }, {
        timestamps: false
    });
}