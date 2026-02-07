import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Dashboard from './pages/Dashboard';
import Calculator from './pages/Calculator';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import ContactForm from './components/ContactForm';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbot from "./components/Chatbot"; // Import Chatbot component
import './styles.css';






function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/contact" element={<ContactForm />} />
       
        
      </Routes>
       <Chatbot />
      <Footer />
    </Router>
  );
}

export default App;
