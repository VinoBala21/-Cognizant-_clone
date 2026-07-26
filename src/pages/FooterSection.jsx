import React from 'react';
import './FooterSection.css';
import logo from "../assets/logo.svg";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaMobileScreenButton,
} from "react-icons/fa6";

const FooterSection = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        {/* Column 1: Logo */}
        <div className="footer-col1">
          <div className="logo-box">
            <img src={logo} alt="Cognizant Logo" className="brand-logo" />
          </div>
        </div>

        {/* Column 2: Links */}
        <div className="footer-col">
          <ul>
            <li><a href="#candidate-privacy">Candidate Privacy Notice</a></li>
            <li><a href="#latest-vacancies">Latest Vacancies</a></li>
            <li><a href="#privacy-notice">Privacy Notice</a></li>
            <li><a href="#fraud-alert">Fraud Alert</a></li>
          </ul>
        </div>

        {/* Column 3: Links */}
        <div className="footer-col">
          <ul>
            <li><a href="#talent-search">Talent Search Privacy Notice</a></li>
            <li><a href="#terms">Terms</a></li>
            <li><a href="#applicant-notice">Applicant Notice</a></li>
            <li><a href="#third-party">Notice to Third Party Recruiters</a></li>
          </ul>
        </div>

        {/* Column 4: Social Media & Copyrights */}
        <div className="footer-col">
          <div className="social-icons">
            <a href="#facebook" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#twitter" aria-label="Twitter">
              <FaXTwitter />
            </a>
            <a href="#linkedin" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="#youtube" aria-label="YouTube">
              <FaYoutube />
            </a>
            <a href="#instagram" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#app" aria-label="App">
              <FaMobileScreenButton />
            </a>
          </div>

          <div className="sub-links">
            <a href="#cookies">Cookies</a> / <a href="#sitemap">Sitemap</a> / <a href="#cognizant">Cognizant.com</a>
          </div>

          <p className="copy">© Cognizant 2026, all rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default FooterSection;