import Nav from '../components/Nav';

const About = () => {
  return (
    <div>
      <Nav />
      <h1>About Our Library Management System</h1>
      <p>Welcome to our comprehensive Library Management System, designed to streamline book borrowing and management for both users and administrators.</p>
      <h2>Features</h2>
      <ul>
        <li>User registration and login</li>
        <li>Browse our extensive book catalogue</li>
        <li>Easy book issuing with date tracking</li>
        <li>Simple book return process</li>
        <li>User-friendly interface</li>
      </ul>
      <h2>Our Mission</h2>
      <p>Our mission is to make book management accessible and efficient, promoting literacy and knowledge sharing in our community.</p>
      <h2>Contact Us</h2>
      <p>For any inquiries, please reach out to our support team.</p>
    </div>
  );
};

export default About;