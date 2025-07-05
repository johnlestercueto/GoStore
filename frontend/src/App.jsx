import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SignUpPage from './pages/SignUpPage';


function App() {
  return (
    <Router>
      
      <h1>hello word</h1>

      <Routes>
        <Route path="/signup" element={<SignUpPage />} />
        
      </Routes>
    </Router>
  );
}

export default App;
