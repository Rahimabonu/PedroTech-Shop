import React from 'react';
import { useLocation } from 'react-router-dom';

const CartPage = () => {
  const location = useLocation();
  const { state } = location;

  // Agar ma'lumotlar mavjud bo'lsa, ularni render qilish
  if (!state) {
    return <div>No products in cart.</div>;
  }

  const { id, imgURL, name, narx } = state;

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      <div className="cart-product">
        <img src={imgURL} alt={name} className="cart-product-img" />
        <div className="cart-product-details">
          <div className="cart-product-name">{name}</div>
          <div className="cart-product-price">{narx}</div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
