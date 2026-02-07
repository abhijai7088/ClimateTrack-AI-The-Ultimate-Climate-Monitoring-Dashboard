import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Chatbot from "./Chatbot"; // Import Chatbot component
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState("");
  const [showChatbot, setShowChatbot] = useState(false); // Track chatbot visibility
  const location = useLocation(); // Used to track current route

  const toggleDropdown = (section) => {
    setActiveDropdown(activeDropdown === section ? "" : section);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".dropdown-container")) {
        setActiveDropdown("");
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  // Toggle the Chatbot visibility
  const toggleChatbot = () => {
    setShowChatbot((prevShowChatbot) => !prevShowChatbot);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>
          <Link to="/" className="navbar-title">
            Climate Awareness
          </Link>
        </h1>
      </div>
      <ul className="navbar-menu">
        {/* Home */}
        <li className="menu-item">
          <Link to="/" className={`menu-link ${location.pathname === '/' ? 'active' : ''}`}>
            Home
          </Link>
        </li>

        {/* About Us */}
        <li className="menu-item">
          <Link to="/about" className={`menu-link ${location.pathname === '/about' ? 'active' : ''}`}>
            About Us
          </Link>
        </li>

        {/* Dashboard */}
        <li className="menu-item">
          <Link to="/dashboard" className={`menu-link ${location.pathname === '/dashboard' ? 'active' : ''}`}>
            Dashboard
          </Link>
        </li>

        {/* Carbon Calculator */}
        <li className="menu-item">
          <Link to="/calculator" className={`menu-link ${location.pathname === '/calculator' ? 'active' : ''}`}>
            Carbon Calculator
          </Link>
        </li>

        {/* Join Us Dropdown */}
        <li
          className={`menu-item dropdown-container ${activeDropdown === "join-us" ? "active" : ""}`}
          onClick={() => toggleDropdown("join-us")}
        >
          <span className="menu-link dropdown-title">Join Us</span>
          {activeDropdown === "join-us" && (
            <ul className="dropdown-menu">
              <li>
                <Link to="/register" className="dropdown-link">
                  Register
                </Link>
              </li>
              <li>
                <Link to="/login" className="dropdown-link">
                  Login
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Contact Us */}
        <li className="menu-item">
          <Link to="/contact" className={`menu-link ${location.pathname === '/contact' ? 'active' : ''}`}>
            Contact Us
          </Link>
        </li>
      </ul>

   

      {/* Display Chatbot if toggled */}
      {showChatbot && <Chatbot />}
    </nav>
  );
};

export default Navbar;
