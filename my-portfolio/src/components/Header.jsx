import React from 'react';

const Header = ({ menuOpen, toggleMenu }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">My Portfolio</div>

        <div 
          className={`menu-toggle ${menuOpen ? 'rotate' : ''}`} 
          onClick={toggleMenu}
        >
          &#9776;
        </div>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
