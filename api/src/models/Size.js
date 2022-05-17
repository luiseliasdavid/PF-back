const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('size', {
        numberSize: {
            type: DataTypes.FLOAT,
            allowNull: false
        }
    }, {
        timestamps: false
    });
}