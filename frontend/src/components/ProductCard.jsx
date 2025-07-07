import React from "react";

export default function ProductCard({ product, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "10px",
        width: "250px",
        cursor: "pointer",
      }}
    >
      <img
        src={`http://localhost:5000${product.imageUrl}`}
        alt={product.name}
        style={{ width: "100%", height: "200px", objectFit: "cover" }}
      />
      <h3>{product.name}</h3>
      <p>₱{product.price}</p>
      <p>{product.description}</p>
    </div>
  );
}
