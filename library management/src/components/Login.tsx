import { useState } from 'react';
import Nav from '../components/Nav';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Logged in!');
  };

  return (
    <div>
      <Nav />
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
        <input type="password" placeholder="Password" value={form.password} onChange={e => setForm({...form, password: e.target.value})} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;