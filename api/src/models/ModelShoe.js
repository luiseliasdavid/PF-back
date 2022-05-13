const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('modelShoe', {
        // Model attributes are defined here
        nameModel: {
            type: DataTypes.STRING,
            // unique: true,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: false
    });
}