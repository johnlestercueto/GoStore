import React from 'react'
import Header from '../components/Header';
import ProductList from '../components/ProductList';
import '../components/Home.css';


const Home = () => {
  return (
    <div>
      <Header />
      <ProductList />
    </div>
  )
}

export default Home