import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Catalogue from './components/Catalogue';
import IssueBook from './components/IssueBook';
import ReturnBook from './components/ReturnBook';
import About from './components/About';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/issue" element={<IssueBook />} />
        <Route path="/return" element={<ReturnBook />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  )
}

export default App