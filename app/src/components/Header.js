// import React from 'react';
// import './Header.css'; // Importing the CSS file for styling
// import { FaFacebook, FaTwitter, FaInstagram, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa'; // Importing icons

// const Header = () => {
//   return (
//     <header className="header">
//       {/* Logo/Brand Name */}
//       <div className="logo">
//         <h1>Anbu Suppliers & EarthMovers</h1>
//       </div>

//       {/* Contact Information */}
//       <div className="contact-info">
//         <p><FaPhone /> Phone: (123) 456-7890</p>
//         <p><FaMapMarkerAlt /> Location: 123 Earthmover St, Construction City</p>
//         <p><FaClock /> Hours: Mon-Fri 8am - 6pm</p>
//       </div>

//       {/* Navigation Menu */}
//       <nav className="nav">
//         <ul className="nav-links">
//           <li><a href="#home" className="nav-link">Home</a></li>
//           <li><a href="#about" className="nav-link">About</a></li>
//           <li><a href="#services" className="nav-link">Services</a></li>
//           <li><a href="#contact" className="nav-link">Contact</a></li>
//         </ul>
//       </nav>

//       {/* Social Media Icons */}
//       <div className="social-media">
//         <a href="https://facebook.com" className="social-icon"><FaFacebook /></a>
//         <a href="https://twitter.com" className="social-icon"><FaTwitter /></a>
//         <a href="https://instagram.com" className="social-icon"><FaInstagram /></a>
//       </div>

//       {/* Call-to-Action Button */}
//       <button className="cta-button">Get a Quote</button>
//     </header>
//   );
// };

// export default Header;

import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa'; // Importing icons
import logo from '../images/logo.jpeg'; // Import the logo image
import './Header.css';

const Header = () => {
  return (
    <header className="header bg-primary text-white py-3">
      {/* Container for Layout */}
      <div className="container">
        <div className="row align-items-center">
          {/* Logo/Brand Name */}
          <div className="col-md-3 col-12 text-center text-md-start mb-3 mb-md-0">
            {/* Logo Image */}
            <img src={logo} alt="Anbu Suppliers & EarthMovers" className="logo-img img-fluid" />
          </div>

          {/* Contact Information */}
          <div className="col-md-5 col-12 d-flex justify-content-center justify-content-md-start mb-3 mb-md-0">
            <div className="d-flex flex-column flex-md-row gap-3">
              <p className="m-0 d-flex align-items-center gap-2">
                <FaPhone /> Phone: (123) 456-7890
              </p>
              <p className="m-0 d-flex align-items-center gap-2">
                <FaMapMarkerAlt /> Location: 123 Earthmover St, Construction City
              </p>
              <p className="m-0 d-flex align-items-center gap-2">
                <FaClock /> Hours: Mon-Fri 8am - 6pm
              </p>
            </div>
          </div>

          {/* Navigation Menu */}
          <div className="col-md-4 col-12 d-flex justify-content-center justify-content-md-end">
            <nav className="nav">
              <ul className="nav-links list-unstyled d-flex gap-3 m-0">
                <li><a href="#home" className="nav-link text-white">Home</a></li>
                <li><a href="#about" className="nav-link text-white">About</a></li>
                <li><a href="#services" className="nav-link text-white">Services</a></li>
                <li><a href="#contact" className="nav-link text-white">Contact</a></li>
              </ul>
            </nav>
          </div>

          {/* Social Media Icons */}
          <div className="col-12 mt-3 d-flex justify-content-center justify-content-md-start">
            <div className="social-media d-flex gap-3">
              <a href="https://facebook.com" className="social-icon text-white">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" className="social-icon text-white">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" className="social-icon text-white">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;