const express = require('express');
const router = express.Router();

// Dummy cart data for example
const cartItems = [
  { id: 1, name: "Milk", price: 2.5, quantity: 1 },
  { id: 2, name: "Rice", price: 5.0, quantity: 2 }
];

// Get all cart items
router.get('/', (req, res) => {
  res.json(cartItems);
});

module.exports = router;
