// write product card here
import React from 'react';
import ViewProductButton from '../components/button.jsx'; 
import './Productcard.css'; 
const Productcard = () => {
  // Static dummy data
  const productImage = 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D';
  const productName = 'Sample Product';
  const price = '₹99.99';

  return (
    <div className="product-card">
      <img src={productImage} alt="Product" className="product-image" />
      <h2 className="product-name">{productName}</h2>
      <p className="product-price">{price}</p>
      <ViewProductButton />
    </div>
  );
};

export default Productcard;