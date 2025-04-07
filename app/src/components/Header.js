// src/components/Header.js
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import logo from '../images/logo.jpeg'; // Import the logo image
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        {/* Top Header (Navigation Links and Social Icons) */}
        <div className="header-top bg-gray-800">
          <div className="container">
            <div className="row align-items-center">
              {/* Logo */}
              <div className="col-md-3 col-6 text-center text-md-start">
                <img src={logo} alt="Earth Movers & Land Suppliers" className="logo-img" />
              </div>

              {/* Navigation Links */}
              <div className="col-md-6 col-6 text-center text-md-center">
                <nav className="nav">
                  <ul className="nav-links list-unstyled d-flex flex-wrap justify-content-center gap-4 m-0">
                    <li>
                      <a href="#home" className="nav-link text-white">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="#about" className="nav-link text-white">
                        About
                      </a>
                    </li>
                    <li>
                      <a href="#services" className="nav-link text-white">
                        Services
                      </a>
                    </li>
                    <li>
                      <a href="#contact" className="nav-link text-white">
                        Contact
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              {/* Social Media Icons (Aligned at the end/top right) */}
              <div className="col-md-3 col-12 d-flex justify-content-center justify-content-md-end">
                <div className="social-media d-flex gap-3">
                  <a href="https://facebook.com" className="social-icon facebook" aria-label="Facebook">
                    <FaFacebookF size={24} />
                  </a>
                  <a href="https://twitter.com" className="social-icon twitter" aria-label="Twitter">
                    <FaTwitter size={24} />
                  </a>
                  <a href="https://instagram.com" className="social-icon instagram" aria-label="Instagram">
                    <FaInstagram size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Header (Contact Info) */}
        <div className="header-bottom bg-gray-700 text-white">
          <div className="container">
            <div className="row align-items-center">
              {/* Contact Information (Aligned in the same line) */}
              <div className="col-12 text-center text-md-start">
                <div className="contact-info d-flex justify-content-center justify-content-md-start gap-4 flex-nowrap">
                  <p className="m-0 d-flex align-items-center gap-2">
                    <FaPhone className="contact-icon" /> <span>Phone: (123) 456-7890</span>
                  </p>
                  <p className="m-0 d-flex align-items-center gap-2">
                    <FaMapMarkerAlt className="contact-icon" /> <span>123 Earthmover St, Construction City</span>
                  </p>
                  <p className="m-0 d-flex align-items-center gap-2">
                    <FaClock className="contact-icon" /> <span>Mon-Fri 8am - 6pm</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;