// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import AndroidIcon from '@mui/icons-material/Android';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        <AndroidIcon style={{ color: 'white', marginRight: '8px' }} />
        I.T. Buddy
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link> {/* Use Link for routing */}
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/products">Products</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contacts">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;