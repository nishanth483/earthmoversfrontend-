// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Footer.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container container py-5">
        {/* Company Info */}
        <div className="footer-section company-info animate__animated animate__fadeInLeft">
          <h3>Earth Movers & Land Suppliers</h3>
          <p>
            Your premier partner in land development and earthmoving since 2010. We deliver excellence in construction, excavation, and material supply across all terrains.
          </p>
          <p className="mt-2"><strong>Years of Experience:</strong> 15+ Years</p>
          <p><strong>Projects Completed:</strong> 500+</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section quick-links animate__animated animate__fadeInUp">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section contact-info animate__animated animate__fadeInRight">
        <h3>Contact Us</h3>
        <p>Phone: +1 (555) 123-4567</p>
        <p>Email: info@earthmoverslands.com</p>
        <p>Address: 123 Construction Lane, Earth City, EC 45678</p>
      </div>

        {/* Newsletter & Social Media */}
        <div className="footer-section newsletter-social animate__animated animate__fadeInUp">
          <h3>Stay Connected</h3>
          <form className="newsletter-form mb-3">
            <input type="email" placeholder="Enter your email" className="form-control" />
            <button type="submit" className="btn btn-primary mt-2">Subscribe</button>
          </form>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom text-center py-3 animate__animated animate__fadeIn">
        <p>© {new Date().getFullYear()} Earth Movers & Land Suppliers. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;