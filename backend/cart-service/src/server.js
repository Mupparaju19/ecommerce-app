const express = require('express');
const app = express();
const cartRoutes = require('./cartRoutes');

// Middleware
app.use(express.json());

// Routes
app.use('/api', cartRoutes);

app.listen(5001, () => {
  console.log('Cart service listening on port 5001');
});
