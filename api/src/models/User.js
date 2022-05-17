const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('user', {
        // Model attributes are defined here
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
            allowNull: false
        },
        // tel: {
        //     type: DataTypes.STRING,
        //     allowNull: false
        // }
    }, {
        timestamps: false
    });
}