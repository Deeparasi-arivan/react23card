import React, { useState } from 'react';
import ProductList from './Components/ProductList';
import CartSummary from './Components/CartSummary';
//import products from './data/Products';
//import products from './data/products';
import products from './data/products';



function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    if (!cart.includes(product.id)) {
      setCart([...cart, product.id]);
    }
  };

  const handleRemoveFromCart = (product) => {
    setCart(cart.filter((id) => id !== product.id));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Shopping Cart</h1>
      </header>
      <main>
        <ProductList
          products={products}
          cart={cart}
          onAddToCart={handleAddToCart}
          onRemoveFromCart={handleRemoveFromCart}
        />
        <CartSummary cart={cart} />
      </main>
    </div>
  );
}

export default App;
