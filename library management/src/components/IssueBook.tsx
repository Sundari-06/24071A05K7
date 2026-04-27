import { useState } from 'react';
import Nav from '../components/Nav';

const IssueBook = () => {
  const [form, setForm] = useState({ bookId: '', issueDate: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Book ${form.bookId} issued on ${form.issueDate}`);
  };

  return (
    <div>
      <Nav />
      <h1>Issue Book</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Book ID" value={form.bookId} onChange={e => setForm({...form, bookId: e.target.value})} />
        <input type="date" value={form.issueDate} onChange={e => setForm({...form, issueDate: e.target.value})} />
        <button type="submit">Issue</button>
      </form>
    </div>
  );
};

export default IssueBook;