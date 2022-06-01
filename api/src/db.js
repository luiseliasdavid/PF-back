require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const fs = require('fs');
const path = require('path');

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const herokuDb = {
  user: DB_USER || "uhrwielpezyxym",
  host: DB_HOST || "ec2-52-71-69-66.compute-1.amazonaws.com",
  password: DB_PASSWORD || "f913d8ff3aa50c39a434e8b805200e15c059c06436baa8aaa85551a41fe03cc2",
  //name: !DB_NAME ? "sneakers" : "d8rp7epoiokuee"
  name: DB_NAME || "d8rp7epoiokuee"
}

const sequelize = new Sequelize(`postgres://${herokuDb.user}:${herokuDb.password}@${herokuDb.host}/${herokuDb.name}`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false,
  dialectOptions: DB_NAME || {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }// lets Sequelize know we can use pg-native for ~30% more speed
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

const { Sneaker, Size, Color, Model, Material, Brand, Category, User, Order, Review } = sequelize.models;

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

//!Carrito de compra (m:n) User - Sneakers
let Cart = sequelize.define('cart', {
  size: {
    type: DataTypes.FLOAT,
    primaryKey: true,
    allowNull: false,
  },
  userId: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
    references: {
      model: 'User',
      key: 'id'
    }
  },
  sneakerId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    references: {
      model: 'Sneaker',
      key: 'id'
    }
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
  timestamps: false,
  uniqueKeys: {
    cart_key: {
      fields: ['userId', 'sneakerId', 'size']
    }
  }
});
User.belongsToMany(Sneaker, { through: Cart });
Sneaker.belongsToMany(User, { through: Cart });

User.belongsToMany(Sneaker, { through: 'wishlist', timestamps: false });
Sneaker.belongsToMany(User, { through: 'wishlist', timestamps: false });

//!Orden Sneaker
let OrderSneaker = sequelize.define('ordersneaker', {
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
  timestamps: false
});
Order.belongsToMany(Sneaker, { through: OrderSneaker });
Sneaker.belongsToMany(Order, { through: OrderSneaker });


//!User a Order
Order.belongsTo(User);
User.hasMany(Order);

//!Sneaker a color
Sneaker.belongsTo(Color);
Color.hasMany(Sneaker);


//!Sneaker a modelo
Sneaker.belongsTo(Model);
Model.hasMany(Sneaker);

//!Review 
User.hasMany(Review,{ foreignKey: "userId" });
Review.belongsTo(User, { foreignKey: "userId" });

Sneaker.hasMany(Review,{ foreignKey: "sneakerId" });
Review.belongsTo(Sneaker,{ foreignKey: "sneakerId" });

module.exports = {
  Cart,
  ...sequelize.models,
  conn: sequelize,
};











