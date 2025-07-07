import { useState } from "react";

export default function ProductForm() {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
  });
  const [image, setImage] = useState(null);

  // Handle text inputs
  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  // Handle image input
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      alert("Please select an image");
      return;
    }

    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("price", product.price);
    formData.append("description", product.description);
    formData.append("image", image);

    try {
      const res = await fetch("http://localhost:5000/api/products/add", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (res.ok) {
        alert("Product added successfully!");
        console.log("Product created:", data);
        // Reset form
        setProduct({ name: "", price: "", description: "" });
        setImage(null);
        e.target.reset();
      } else {
        alert(data.message || "Failed to add product");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to add product");
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto" }}>
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div style={{ marginBottom: "10px" }}>
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={product.name}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={product.price}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <textarea
            name="description"
            placeholder="Description"
            value={product.description}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
            style={{ width: "100%" }}
          />
        </div>

        <button
          type="submit"
          style={{
            padding: "10px 20px",
            background: "#4caf50",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Add Product
        </button>
      </form>
    </div>
  );
}
