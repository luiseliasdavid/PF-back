const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('color', {
        // Model attributes are defined here
        nameColor: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        timestamps: false
    });
}