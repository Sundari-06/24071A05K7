import Nav from '../components/Nav';

const Home = () => {
  return (
    <div>
      <Nav />
      <h1>Welcome to Our Library Management System</h1>
      <p>Discover, borrow, and manage books with ease. Our system provides a seamless experience for all your reading needs.</p>
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <h2>Quick Actions</h2>
        <p>Register an account, browse our catalogue, or return a book.</p>
      </div>
    </div>
  );
};

export default Home;