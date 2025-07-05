import useForm from '../hooks/useForm';

export default function SignUpForm() {
  const { values, handleChange, resetForm } = useForm({
    username: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" value={values.username} onChange={handleChange} placeholder="Username" />
      <input name="email" value={values.email} onChange={handleChange} placeholder="Email" />
      <input type="password" name="password" value={values.password} onChange={handleChange} placeholder="Password" />
      <button type="submit">Sign Up</button>
    </form>
  );
}
