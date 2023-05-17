import React from "react";
import "../styles/Navbar.css";
import logo from "../images/logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-logo">
          <img src={logo} alt="" />
        </div>
        <ul className="nav-menu">
          <li>
            <a href="#home" className="nav-link">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="nav-link">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="nav-link">
              Services
            </a>
          </li>
          <li>
            <a href="#tours" className="nav-link">
              Tours
            </a>
          </li>
        </ul>
        <div className="nav-icons">
          <li>
            <a
              href="https://www.facebook.com"
              target="_blank"
              className="nav-icon"
            >
              <i class="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.twitter.com"
              target="_blank"
              className="nav-icon"
            >
              <i class="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.twitter.com"
              target="_blank"
              className="nav-icon"
            >
              <i class="fab fa-squarespace"></i>
            </a>
          </li>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
