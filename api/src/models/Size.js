const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('size', {
        // Model attributes are defined here
        numberSize: {
            type: DataTypes.FLOAT,
            allowNull: false
        }
    }, {
        timestamps: false
    });
}