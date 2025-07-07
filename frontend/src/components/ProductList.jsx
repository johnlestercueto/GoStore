import ProductCard from './ProductCard';
import './ProductList.css';



const ProductList = () => {
  const products = [
    { id: 1, title: 'Product 1', description: 'Description 1' },
    { id: 2, title: 'Product 2', description: 'Description 2' },
    { id: 3, title: 'Product 3', description: 'Description 3' },
    // add more as needed
  ];

  return (
    <div className="product-list">
      <h2>Product List</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            description={product.description}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductList