import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar({ theme, toggleTheme }) {
  return (
    <header className="header">
      <div className="header-container">
        <NavLink to="/" className="logo">My Portfolio</NavLink>
        
        <nav className="navbar" id="navbar">
          <ul>
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/projects" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <button 
                type="button"
                onClick={toggleTheme} 
                className="theme-toggle-btn"
              >
                {theme === 'dark' ? 'Light' : 'Dark'}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
