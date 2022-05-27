const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('model', {
        // Model attributes are defined here
        nameModel: {
            type: DataTypes.STRING,
            // unique: true,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
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