const { DataTypes } = require("sequelize");
const Product = require("./Product");

module.exports = (sequelize) => {
  const Category = sequelize.define('Category', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true,
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  });
  Category.associate = (models) => {
    Category.hasMany(models.Product, {
      foreignKey: 'categoryCode',
      sourceKey: 'code',
      onDelete: 'CASCADE',
    });
  };
  return Category;
};
