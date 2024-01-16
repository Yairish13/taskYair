const express = require('express');
// const { validate } = require('express-validation');
const controller = require('../../controllers/products/products.controller');

const router = express.Router();

router
  .route('/')
  .get(
    controller.getAllProducts,
  );

module.exports = router;
