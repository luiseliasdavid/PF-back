const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('category', {
        // Model attributes are defined here
        nameCategory: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
        // deleted: {
        //     type: Boolean,
        //     default: false
        // }
    }, {
        timestamps: false
    });
}