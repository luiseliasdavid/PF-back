const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('discount', {
        // Model attributes are defined here
        sneakerId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        sneakerModel:{
            type: DataTypes.STRING
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        },
        percentage:{
            type: DataTypes.FLOAT
        },
        creation: {
            type: DataTypes.STRING
        },
        expiration: {
            type: DataTypes.STRING
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