import React, { useState } from "react";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  
  const products = [
    { id: 1, name: "Milk", price: 2.5 },
    { id: 2, name: "Curd", price: 1.5 },
    { id: 3, name: "Rice", price: 5.0 }
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="App">
      <h1>E-commerce Shop</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <h2>Cart: {cart.length} items</h2>
    </div>
  );
}

export default App;
