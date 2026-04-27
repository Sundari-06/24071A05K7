import Nav from '../components/Nav';

const Catalogue = () => {
  const books = [
    { id: 1, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { id: 2, title: '1984', author: 'George Orwell' },
    { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen' },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger' },
    { id: 6, title: 'Harry Potter and the Sorcerer\'s Stone', author: 'J.K. Rowling' },
    { id: 7, title: 'The Lord of the Rings', author: 'J.R.R. Tolkien' },
    { id: 8, title: 'The Hobbit', author: 'J.R.R. Tolkien' },
    { id: 9, title: 'Brave New World', author: 'Aldous Huxley' },
    { id: 10, title: 'Fahrenheit 451', author: 'Ray Bradbury' },
    { id: 11, title: 'The Alchemist', author: 'Paulo Coelho' },
    { id: 12, title: 'Sapiens: A Brief History of Humankind', author: 'Yuval Noah Harari' },
    { id: 13, title: 'Thinking, Fast and Slow', author: 'Daniel Kahneman' },
    { id: 14, title: 'The Power of Habit', author: 'Charles Duhigg' },
    { id: 15, title: 'Educated', author: 'Tara Westover' },
    { id: 16, title: 'Becoming', author: 'Michelle Obama' },
    { id: 17, title: 'The Subtle Art of Not Giving a F*ck', author: 'Mark Manson' },
    { id: 18, title: 'Atomic Habits', author: 'James Clear' },
    { id: 19, title: 'Dune', author: 'Frank Herbert' },
    { id: 20, title: 'Neuromancer', author: 'William Gibson' },
  ];

  return (
    <div>
      <Nav />
      <h1>Book Catalogue</h1>
      <ul>
        {books.map(book => (
          <li key={book.id}>{book.id}. {book.title} by {book.author}</li>
        ))}
      </ul>
    </div>
  );
};

export default Catalogue;