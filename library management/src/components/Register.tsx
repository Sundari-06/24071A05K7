import { useState } from 'react';
import Nav from '../components/Nav';

const Register = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Registered!');
  };

  return (
    <div>
      <Nav />
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
        <input type="email" placeholder="Email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
        <input type="password" placeholder="Password" value={form.password} onChange={e => setForm({...form, password: e.target.value})} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;