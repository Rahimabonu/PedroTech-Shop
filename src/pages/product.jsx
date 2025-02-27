import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ imgURL, name, narx, id }) => {
  const navigate = useNavigate();

  const handleGoToCart = () => {
    // Cart sahifasiga navigatsiya va product ma'lumotlarini state orqali uzatish
    navigate('/cart', { state: { id, imgURL, name, narx } });
  };

  return (
    <div className="product">
      <img className="product-img" src={imgURL} alt={name} />
      <div className="product-name">{name}</div>
      <div className="product-price">{narx}</div>
      <button onClick={handleGoToCart} className="product-btn">Add to Cart</button>
    </div>
  );
};

export default Product;
