const { sequelize, Product, Category, Order } = require('../../../../config/sequelize');
const { handleOrderForProducts } = require('../../utils');

exports.getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.findAll({
      include: [{
        model: Category,
        attributes: ['name'],
      }],
      order: [[Category, 'name', 'ASC']],
    });
    const orderedProducts = handleOrderForProducts(products);
    res.json(orderedProducts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

