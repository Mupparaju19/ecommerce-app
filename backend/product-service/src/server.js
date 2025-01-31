const express = require('express');
const app = express();
const productRoutes = require('./productRoutes');

// Middleware
app.use(express.json());

// Routes
app.use('/api', productRoutes);

app.listen(5000, () => {
  console.log('Product service listening on port 5000');
});
