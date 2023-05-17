import React from "react";
import "../styles/Navbar.css";
import logo from "../images/logo.svg";
import PageLinks from "./PageLinks";
import PageIcon from "./PageIcon";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-logo">
          <a href="#home">
            <img src={logo} alt="" />
          </a>
        </div>
        <PageLinks parentClass="nav-menu" itemClass="nav-link" />
        <PageIcon parentClass="nav-icons" itemClass="nav-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
