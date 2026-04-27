import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <Link to="/">Home</Link> | 
      <Link to="/register">Register</Link> | 
      <Link to="/login">Login</Link> | 
      <Link to="/catalogue">Catalogue</Link> | 
      <Link to="/issue">Issue Book</Link> | 
      <Link to="/return">Return Book</Link> | 
      <Link to="/about">About</Link>
    </nav>
  );
};

export default Nav;