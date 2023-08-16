import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMicrophone, faCog } from '@fortawesome/free-solid-svg-icons';
import '../style/header.css';

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <FontAwesomeIcon icon={faBars} className="navbar-icon" />
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            My Crypto
          </Link>
        </div>
        <div className="navbar-icons">
          <FontAwesomeIcon icon={faMicrophone} className="navbar-icon" />
          <FontAwesomeIcon icon={faCog} className="navbar-icon" />
        </div>
      </nav>
    </header>
  );
}

export default Header;
