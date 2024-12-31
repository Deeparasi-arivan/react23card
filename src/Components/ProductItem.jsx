import React from 'react';

const ProductItem = ({ product, isInCart, onAddToCart, onRemoveFromCart }) => {
  return (
    <li className="product">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      {isInCart ? (
        <button onClick={() => onRemoveFromCart(product)}>Remove from Cart</button>
      ) : (
        <button onClick={() => onAddToCart(product)}>Add to Cart</button>
      )}
    </li>
  );
};

export default ProductItem;
