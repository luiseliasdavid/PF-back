const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('user', {
        // Model attributes are defined here
         id:{
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },
        nameUser: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        typeUser: {
            type: DataTypes.ENUM('admin', 'client'),
            defaultValue: 'client'
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true
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