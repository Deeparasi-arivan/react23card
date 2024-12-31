import React from 'react';

const CartSummary = ({ cart }) => {
  return (
    <section className="cart">
      <h2>Shopping Cart</h2>
      <p>Items in cart: {cart.length}</p>
    </section>
  );
};

export default CartSummary;
