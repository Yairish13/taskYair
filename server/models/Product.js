// const { DataTypes } = require('sequelize');

// module.exports = (sequelize) => {
//   const Product = sequelize.define('Product', {
//     title: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     description: {
//       type: DataTypes.TEXT,
//       allowNull: false,
//     },
//     price: {
//       type: DataTypes.DECIMAL(10, 2),
//       allowNull: false,
//     },
//     categoryCode: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   });

//   Product.associate = (models) => {
//     Product.belongsTo(models.Category, {
//       foreignKey: 'categoryCode',
//       targetKey: 'code',
//       onDelete: 'CASCADE',
//     });
//   };
//   return Product;
// };
// product.js

const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Product = sequelize.define('Product', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    categoryCode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Product.associate = (models) => {
    Product.belongsTo(models.Category, {
      foreignKey: 'categoryCode',
      targetKey: 'code',
      onDelete: 'CASCADE',
    });
  };

  return Product;
};
