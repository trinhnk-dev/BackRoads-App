import React from "react";
import "../styles/Footer.css";
import PageLinks from "./PageLinks";
import PageIcon from "./PageIcon";

const Footer = () => {
  return (
    <footer className="section footer">
      <PageLinks parentClass="footer-links" itemClass="footer-link" />
      <PageIcon parentClass="footer-icons" itemClass="footer-icon" />
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
