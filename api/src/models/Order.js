const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
    sequelize.define('order', {
        // Model attributes are defined here
        state: {
            type: DataTypes.ENUM('Pending', 'In Progress', 'Cancelled', 'Completed'),
            defaultValue: 'Pending',
            allowNull: false
        },
        nameUser: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userId: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        total: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        products: {
            type: DataTypes.ARRAY(DataTypes.JSON)
        },
        date: {
            type: DataTypes.STRING,
            allowNull: false
        }

    });

}