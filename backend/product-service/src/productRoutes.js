const express = require('express');
const productController = require('./productController');
const router = express.Router();

router.use('/products', productController);

module.exports = router;
