const { DataTypes, UUID, UUIDV4 } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('colors', 
  {
    idProduct: {
      type: UUID,
      defaultValue: UUIDV4,
      allowNull: false,
    },
    Model: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Size: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    Stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    Price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    }
    
  },
  {
    timestamps: false
  }
  );
};

/*
-IdProduct
-Model
-Size
-Stock
-Price
*/