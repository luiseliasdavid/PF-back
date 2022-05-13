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
console.log(sequelize.models);

const { Sneaker, Size, Color, ModelShoe, Material, Brand, Category } = sequelize.models;

// Color.hasOne(Sneaker);
//Sneaker a color
Sneaker.belongsTo(Color);
Color.hasMany(Sneaker);
//Sneaker a talla
Sneaker.belongsTo(Size);
Size.hasMany(Sneaker);
//Modelo a marca
ModelShoe.belongsTo(Brand);
Brand.hasMany(ModelShoe);
//Modelo a material
ModelShoe.belongsTo(Material);
Material.hasMany(ModelShoe);
//Sneaker a modelo
Sneaker.belongsTo(ModelShoe);
ModelShoe.hasMany(Sneaker);
//Modelo a categorias(m:n)
ModelShoe.belongsToMany(Category, { through: "model_category", timestamps: false });
Category.belongsToMany(ModelShoe, { through: "model_category", timestamps: false });

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
