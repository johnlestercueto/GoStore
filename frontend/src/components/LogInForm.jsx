import { useState } from "react"
import useForm from "../hooks/useForm"
import { useNavigate } from 'react-router-dom';

const LogInForm = () => {
    const { values, handleChange, resetForm } = useForm({
    email: '',
    password: '',
  });

  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    try {
      const response = await fetch('http://localhost:5000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: values.email,
          password: values.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message || 'log in successful!');
        navigate('/home');
      } else {
        setMessage(data.message || 'log in failed.');
        resetForm();
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="email"
        value={values.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
        placeholder="Password"
      />
      <button type="submit">Log in</button>

      {/* Eto yung mag-display ng message */}
      {message && <p>{message}</p>}
    </form>
  )
}

export default LogInForm