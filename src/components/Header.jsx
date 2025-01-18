import React, { useState } from 'react';
import '../styles/Header.css';
import zyskimage from '../images/home-image.png';
import profileimage from '../images/profile.png';
import zysklogo from '../images/zysklogo.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev); ;
  };

  return (
    <header className="header-container" id="home">
      <nav className="navbar">
        <div className="logo">
          <img src={zysklogo} alt="Zysk Logo"></img>
        </div>
        <ul className={`nav-links ${menuOpen ? 'show' : ''}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#resources">Resources</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
        <div className="profile">
          <img src={profileimage} alt="Profile-Image" className="profile-img" />
        </div>
        <button className="hamburger-menu" onClick={toggleMenu} aria-label="Menu">
          ☰
        </button>
      </nav>
      <div className="header-content">
        <p className="new-feature">New feature</p>
        <a href="#team-dashboard" className="dashboard-link">Check out the team dashboard →</a>
        <h2 className="header-title">Beautiful analytics to grow smarter</h2>
        <p className="header-description">
          Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
        </p>
        <div className="header-buttons">
          <button className="btn-demo">Demo</button>
          <button className="btn-signup">Sign up</button>
        </div>
        <div className="header-image">
          <img src={zyskimage} alt="Front-Image" className='front-img' />
        </div>
      </div>
    </header>
  );
};

export default Header;
