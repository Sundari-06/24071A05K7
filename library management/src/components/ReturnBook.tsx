import { useState } from 'react';
import Nav from '../components/Nav';

const ReturnBook = () => {
  const [form, setForm] = useState({ bookId: '', returnDate: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Book ${form.bookId} returned on ${form.returnDate}`);
  };

  return (
    <div>
      <Nav />
      <h1>Return Book</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Book ID" value={form.bookId} onChange={e => setForm({...form, bookId: e.target.value})} />
        <input type="date" value={form.returnDate} onChange={e => setForm({...form, returnDate: e.target.value})} />
        <button type="submit">Return</button>
      </form>
    </div>
  );
};

export default ReturnBook;