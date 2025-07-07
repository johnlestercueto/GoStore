import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Failed to fetch products", err);
      }
    };

    fetchProducts();
  }, []);

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>All Products</h2>
      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {products.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              onClick={() => handleProductClick(product._id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
