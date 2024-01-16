const { Sequelize } = require('sequelize');
const config = require('./config.json');


const env = process.env.NODE_ENV || 'development';
const sequelize = new Sequelize(config[env]);


const Product = require('../models/Product')(sequelize);
const Category = require('../models/Category')(sequelize);
const Order = require('../models/Order')(sequelize);

Product.associate({ Category });
Category.associate({ Product });
module.exports = {
  sequelize,
  Product,
  Category,
  Order,
};

