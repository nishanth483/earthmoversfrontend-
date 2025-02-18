import React from 'react';
import owner from '../images/owner.jpg'; // Import owner image
import './Home.css'; // Import CSS file for styling
import { useEffect } from 'react';

const Home = () => {

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    });

    const animatedElements = document.querySelectorAll('.animated-card, .animated-title, .animated-cta');
    animatedElements.forEach((element) => observer.observe(element));

    return () => {
      animatedElements.forEach((element) => observer.unobserve(element));
    };
  }, []);
  return (
    <div className="home-container">
      {/* First Card: Owner Image and Content */}
      <div className="container mb-5 animated-card">
        <div className="card-container shadow rounded overflow-hidden">
          {/* Left Side: Owner Image */}
          <div className="card-image">
            <img src={owner} alt="Owner of Earth Movers" />
          </div>
          {/* Right Side: Content */}
          <div className="card-content">
            <h1>Welcome to Earth Movers & Land Suppliers</h1>
            <p>
              At Earth Movers & Land Suppliers, we specialize in providing top-notch services for land development,
              excavation, and earthmoving projects. Our team of experts is committed to delivering high-quality results
              with professionalism and efficiency.
            </p>
            <p>
              Whether you're planning a residential project, commercial development, or infrastructure work, we have
              the tools, expertise, and dedication to bring your vision to life.
            </p>
            <button className="btn">Learn More</button>
          </div>
        </div>
      </div>

      {/* Second Card: Additional Information */}
      <div className="container mb-5 animated-card">
        <div className="card-container shadow rounded overflow-hidden">
          {/* Left Side: Content */}
          <div className="card-content order-md-2">
            <h1>Why Choose Us?</h1>
            <p>
              With years of experience in the industry, we pride ourselves on delivering exceptional service and
              reliability. Our team is committed to meeting your needs with precision and care.
            </p>
            <ul>
              <li>Expertise in land clearing, excavation, and grading.</li>
              <li>State-of-the-art equipment for efficient project execution.</li>
              <li>Dedicated customer support throughout the project lifecycle.</li>
              <li>Commitment to safety and environmental sustainability.</li>
            </ul>
            <button className="btn">Contact Us</button>
          </div>
          {/* Right Side: Placeholder for Visual Design */}
          <div className="card-image order-md-1">
            <div className="placeholder"></div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="container mb-5">
        <h2 className="text-center animated-title">What Our Clients Say</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="testimonial-card shadow rounded p-4 animated-card">
              <p>
                "Earth Movers delivered exceptional service for our construction project. Highly recommend them!"
              </p>
              <p className="author">- John Doe</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="testimonial-card shadow rounded p-4 animated-card">
              <p>
                "Professional, reliable, and efficient. They exceeded our expectations!"
              </p>
              <p className="author">- Jane Smith</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="testimonial-card shadow rounded p-4 animated-card">
              <p>
                "Their team is knowledgeable and dedicated. We will definitely work with them again."
              </p>
              <p className="author">- Mark Johnson</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="cta-section text-center py-5 animated-cta">
        <h2>Ready to Get Started?</h2>
        <p>Contact us today to discuss your project and get a free quote!</p>
        <button className="btn cta-btn">Get a Quote</button>
      </div>
    </div>
  );
};

export default Home;