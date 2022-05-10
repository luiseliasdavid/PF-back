const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('order', {
    paymentStatus: {
      type: DataTypes.ENUM('On Cart', 'Creada', 'Procesando', 'Cancelada', 'Completa'),
      defaultValue: 'On Cart',
      allowNull: false
    },
    orderDate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false
    }
  },
    {
      timestamps: false
    }
  );
};