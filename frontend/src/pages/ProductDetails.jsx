import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from '../components/Header';
import '../components/ProductDetails.css';
import { useNavigate } from 'react-router-dom';

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/Home`);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error("Failed to fetch product", err);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div>
    <Header />
    <div style={{ padding: "20px" }}>
      <h2>Product Details</h2>
      <img
        src={`http://localhost:5000${product.imageUrl}`}
        alt={product.name}
        style={{ width: "300px", height: "300px", objectFit: "cover" }}
      />
      <h3>{product.name}</h3>
      <p>₱{product.price}</p>
      <p>{product.description}</p>
      <button className="add-cart-btn">Add to Cart</button>
        <button className="add-back-btn" onClick={handleClick}>Back</button>
    </div>
    </div>
  );
}
