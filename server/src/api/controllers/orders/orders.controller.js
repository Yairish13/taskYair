const { Order } = require('../../../../config/sequelize');

exports.postOrder = async (req, res, next) => {
  try {
    const { fullName, address, email, products } = req.body;

    if (!fullName || !address || !email || !products || !Array.isArray(products) || products.length === 0) {
      return res.status(400).json({ error: 'Invalid request body' });
    }

    const order = await Order.create({
      fullName,
      address,
      email,
      products,
    });

    return res.status(201).json(order);
  } catch (error) {
    console.error('Error creating order:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};


