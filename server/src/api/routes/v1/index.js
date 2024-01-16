const express = require('express');
const httpStatus = require('http-status');
const productsRoute = require('./products.route');
const ordersRoute = require('./orders.route');

const router = express.Router();

/**
 * GET v1/status
 */
router.get('/status', (req, res) => res.json({
  code: httpStatus.OK,
  message: 'ok',
}));


router.use('/products', productsRoute);
router.use('/orders', ordersRoute);

module.exports = router;
