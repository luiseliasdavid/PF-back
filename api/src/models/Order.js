const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
    sequelize.define('order', {
        // Model attributes are defined here
        state: {
            type: DataTypes.ENUM('Pending', 'In Progress', 'Cancelled', 'Completed'),
            defaultValue: 'Pending',
            allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER,
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
            type: DataTypes.ARRAY(DataTypes.STRING)
        },
        date: {
            type: DataTypes.STRING,
            allowNull: false
        }

    });

}