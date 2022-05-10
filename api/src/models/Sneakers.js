const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('sneakers', {
/*     id: {
      type: DataTypes.INTEGER, 
      defaultValue: DataTypes.UUIDV4,
      allowNull: false, 
      primaryKey: true
    }, */
    
    brand_name: {
      type: DataTypes.STRING,
      
      unique: false
    },
    color: {
      type: DataTypes.STRING,
      
    },
    details: {
      type: DataTypes.STRING,
      
    },
    grid_picture_url: {
      type: DataTypes.STRING,
     
    },
  

  },
  {
    timestamps: false
  });
};

