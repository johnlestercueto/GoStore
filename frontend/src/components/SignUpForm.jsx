import { useState } from 'react';
import useForm from '../hooks/useForm';

export default function SignUpForm() {
  const { values, handleChange, resetForm } = useForm({
    username: '',
    email: '',
    password: '',
  });

  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    try {
      const response = await fetch('http://localhost:5000/api/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: values.username,
          email: values.email,
          password: values.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message || 'Signup successful!');
        resetForm();
      } else {
        setMessage(data.message || 'Signup failed.');
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
        name="username"
        value={values.username}
        onChange={handleChange}
        placeholder="Username"
      />
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
      <button type="submit">Sign Up</button>

      {/* Eto yung mag-display ng message */}
      {message && <p>{message}</p>}
    </form>
  );
}
