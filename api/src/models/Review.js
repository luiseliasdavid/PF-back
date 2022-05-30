const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('review', {
        // Model attributes are defined here
        title:{
            type: DataTypes.STRING,
            allowNull: false
        },
        review: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        rating:{
            type: DataTypes.FLOAT,
            defaultValue: 1,
        },
    }, {
        timestamps: true
    })
}