const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('order_detail', {
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull:false
    },
  },
    {
      timestamps: false
    }
  );
};

//Se relaciona con id de ORDER y PRODUCT