import React from 'react';

function Navbar({ toggleDarkMode, isDarkMode }) {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="#" className="navbar-title">TextUtils</a>
      </div>
      <ul className="navbar-links" style={{display:'flex', listStyle:'none'}} >
        <li><a href="#">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <div className="dark-mode-toggle">
        <label>
          <input type="checkbox" onChange={toggleDarkMode} checked={isDarkMode} />
          Enable dark Mode
        </label>
      </div>
    </nav>
  );
}

export default Navbar;
