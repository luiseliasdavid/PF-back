const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
    sequelize.define('order', {
        // Model attributes are defined here
        state: {
            type: DataTypes.ENUM('created','processing','completed','canceled'),
            allowNull: false
        },
    
    });

}