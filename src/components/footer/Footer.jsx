import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png"; // Adjust the path to your logo

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo} alt="College Logo" />
        </div>
        <div className="footer-grid">
          <div className="footer-col">
            <h5>Contact</h5>
            <ul>
              <li>Email: icmst@sece.ac.in</li>
              <li>Mobile: +91 63811 38369, +91 99766 33443.</li>
              <li>
                Web:<a href="https://www.sece.ac.in"> www.sece.ac.in</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Address</h5>
            <ul>
              <li>
                Conference Chair ICMST 2025,
                <br />
                Sri Eshwar College of Engineering, Kondampatti (po),
                <br />
                Vadasithur (Via), Kinathukkadavu, Coimbatore-641 202,
                <br />
                TamilNadu, INDIA.
              </li>
              <li>
                <a href="/">Submit your paper</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Website Designed & Maintained By: Department of Information Technology, SECE.</p>
        <p> © 2025 icmst-sece All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
