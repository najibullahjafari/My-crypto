import React from 'react';
import { Link } from 'react-router-dom';
import '../style/header.css';

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            My Crypto
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
