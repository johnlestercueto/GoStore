import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SignUpPage from './pages/SignUpPage';
import LogInPage from './pages/LogInPage';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Product from './pages/ProductPage'

function App() {
  return (
    <Router>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/addproduct" element={<Product />} />
        
      </Routes>
    </Router>
  );
}

export default App;
