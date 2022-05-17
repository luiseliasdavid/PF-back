require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const fs = require('fs');
const path = require('path');

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const herokuDb = {
  user: "uhrwielpezyxym",
  host: "ec2-52-71-69-66.compute-1.amazonaws.com",
  password: "f913d8ff3aa50c39a434e8b805200e15c059c06436baa8aaa85551a41fe03cc2",
  name: "d8rp7epoiokuee"
}

const sequelize = new Sequelize(`postgres://${DB_USER || herokuDb.user }:${DB_PASSWORD || herokuDb.password }@${DB_HOST || herokuDb.host}/${DB_NAME || herokuDb.name}`, {
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

const { Sneaker, Size, Color, Model, Material, Brand, Category, User } = sequelize.models;


//!Modelo a categorias(m:n)
Model.belongsToMany(Category, { through: "model_category", timestamps: false });
Category.belongsToMany(Model, { through: "model_category", timestamps: false });


//!Modelo a marca
Model.belongsTo(Brand);
Brand.hasMany(Model);

//!Modelo a material
Model.belongsTo(Material);
Material.hasMany(Model);


//!Modelo a Sizes(m:n)
let ModelSize = sequelize.define('modelsize', {
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
  timestamps: false
});
Model.belongsToMany(Size, { through: ModelSize });
Size.belongsToMany(Model, { through: ModelSize });


//!Sneaker a color
Sneaker.belongsTo(Color);
Color.hasMany(Sneaker);


//!Sneaker a modelo
Sneaker.belongsTo(Model);
Model.hasMany(Sneaker);

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};











