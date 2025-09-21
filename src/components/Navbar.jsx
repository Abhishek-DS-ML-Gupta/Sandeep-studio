import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="old-navbar">
      <div className="navbar-brand">
        <NavLink to="/">
          <img src="/logo.png" alt="Sandeep Studio & Mixing Lab Logo" className="logo" />
        </NavLink>
      </div>
      <ul>
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? "active-link" : ""}
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/services" 
            className={({ isActive }) => isActive ? "active-link" : ""}
          >
            Services
          </NavLink>
          <ul className="dropdown">
            <li>
              <NavLink 
                to="/services" 
                className={({ isActive }) => isActive ? "active-link" : ""}
              >
                All Services
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/book-service" 
                className={({ isActive }) => isActive ? "active-link" : ""}
              >
                Book Services
              </NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink 
            to="/portfolio" 
            className={({ isActive }) => isActive ? "active-link" : ""}
          >
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about" 
            className={({ isActive }) => isActive ? "active-link" : ""}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => isActive ? "active-link" : ""}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
