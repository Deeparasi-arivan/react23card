import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ products, cart, onAddToCart, onRemoveFromCart }) => {
  return (
    <section className="products">
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            isInCart={cart.includes(product.id)}
            onAddToCart={onAddToCart}
            onRemoveFromCart={onRemoveFromCart}
          />
        ))}
      </ul>
    </section>
  );
};

export default ProductList;
