const express = require('express');
const controller = require('../../controllers/orders/orders.controller');

const router = express.Router();

router
    .route('/')
    .post(
        controller.postOrder,
    );

module.exports = router;
