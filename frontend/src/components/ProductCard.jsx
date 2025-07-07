import React from 'react'
import './ProductCard.css';
import { useNavigate } from 'react-router-dom';


const ProductCard = ({id, title, description}) => {
  const navigate = useNavigate();
   

  const handleClick = () => {
    navigate(`/product/${id}`);
  };

  return (
     <div className="product-card" onClick={handleClick}>
      <div className="product-image"></div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default ProductCard