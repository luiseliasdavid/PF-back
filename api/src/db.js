require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/sneakers`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});
try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
const basename = path.basename(__filename);
const modelDefiners = [];


fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

modelDefiners.forEach(model => model(sequelize));
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);

sequelize.models = Object.fromEntries(capsEntries);

const { Sneaker, Size, Color, Model, Material, Brand, Category, Modelsize } = sequelize.models;

//!Sneaker a color
Sneaker.belongsTo(Color);
Color.hasMany(Sneaker);
//!Modelo a marca
Model.belongsTo(Brand);
Brand.hasMany(Model);
//!Modelo a material
Model.belongsTo(Material);
Material.hasMany(Model);
//!Sneaker a modelo
Sneaker.belongsTo(Model);
Model.hasMany(Sneaker);
//! Modelo a Size (m:n)
Model.belongsToMany(Size, { through: Modelsize });
Size.belongsToMany(Model, { through: Modelsize });
//!Modelo a categorias(m:n)
Model.belongsToMany(Category, { through: "model_category", timestamps: false });
Category.belongsToMany(Model, { through: "model_category", timestamps: false });

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
