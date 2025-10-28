import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <p>My App</p>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">Todos List</Link>
          </li>
          <li>
            <Link to="/addtocart">AddToCart</Link>
          </li>
          <li>
            <Link to="/fetching">Fetching API</Link>
          </li>
          <li>
            <Link to="/shakaPlayer">Video Player</Link>
          </li>
           <li>
            <Link to="/contact_us">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
