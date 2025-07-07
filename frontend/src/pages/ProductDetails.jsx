import React from 'react'
import Header from '../components/Header';
import { useParams } from 'react-router-dom';
import '../components/ProductDetails.css';
import { useNavigate } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/Home`);
  };

  return (
    
    <div>
    <Header />
    <div className="details-container">
      <div className="details-left">
        <div className="main-image">Product Pic {id}</div>
        <div className="thumbnails">
          <div className="thumb"></div>
          <div className="thumb"></div>
          <div className="thumb"></div>
          <div className="thumb"></div>
        </div>
      </div>
      <div className="details-right">
        <h2>Product Details (ID: {id})</h2>
        <p>Full product description goes here...</p>
        <button className="add-cart-btn">Add to Cart</button>
        <button className="add-back-btn" onClick={handleClick}>Back</button>
      </div>
    </div>
    </div>
  )
}

export default ProductDetails