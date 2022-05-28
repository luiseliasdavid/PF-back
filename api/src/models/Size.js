const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('size', {
        numberSize: {
            type: DataTypes.FLOAT,
            allowNull: false,
            unique: true
        }
    }, {
        timestamps: false
    });
}