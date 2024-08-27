import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './Navbar.css';
import logo from '../assets/logo.jpg';
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#003366' }}>
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <Link className="navbar-brand" to="/">
          <img
            src={logo}
            alt="Logo"
            style={{ width: '40px', height: 'auto',marginRight: '10px', borderRadius:'20%' }} 
          />
          Arika le Travels
        </Link>
        <a href="mailto:info@example.com" className="navbar-email">
          <span className="email-icon">✉️</span> info@arikatravels.com
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

