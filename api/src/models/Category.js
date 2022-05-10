const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
    sequelize.define('categories',
        {
            name: {
                type: DataTypes.ENUM(
                    'runner',
                    'futbol',
                    'basketball',
                    'training',
                    'urbana',
                    'outdoor'
                ),
                defaultValue: 'sport',
                allowNull: false,
            },
        },
        {
            timestamps: false
        }
    );
};
