const express = require('express');
const router = express.Router();

// Dummy product data for example
const products = [
  { id: 1, name: "Milk", price: 2.5 },
  { id: 2, name: "Curd", price: 1.5 },
  { id: 3, name: "Rice", price: 5.0 }
];

// Get all products
router.get('/', (req, res) => {
  res.json(products);
});

module.exports = router;
