const express = require('express');
const cartController = require('./cartController');
const router = express.Router();

router.use('/cart', cartController);

module.exports = router;
