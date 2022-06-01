const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('hot', {
        // Model attributes are defined here
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        counter: {
            type: DataTypes.BIGINT,
            allowNull: false,
        }
    }, {
        timestamps: true
    });
}