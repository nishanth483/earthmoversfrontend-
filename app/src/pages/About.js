// About.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import { Fade } from 'react-awesome-reveal'; // For animations
import './About.css'; // Custom styling
import owner from '../images/owner.jpg'
const About = () => {
  return (
    <section id="about" className="about-section py-5 bg-gradient">
      <div className="container">
        {/* Section Title */}
        <Fade direction="down" triggerOnce>
          <h1 className="text-center mb-5 display-3 fw-bold text-dark animate-title">
            About Anbu Suppliers & Earth Movers
          </h1>
        </Fade>

        <div className="row align-items-center">
          {/* Text Content */}
          <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <Fade direction="left" triggerOnce>
              <p className="lead text-dark">
                Founded by visionary entrepreneur Anbu in 2004, Anbu Suppliers and Earth Movers 
                sparked a revolution in the construction world. From humble beginnings, we’ve 
                evolved into an industry titan, delivering unrivaled JCB rental services and 
                premium supplies of sand, bricks, and cement.
              </p>
              <p className="text-dark">
                We don’t just move earth—we redefine it. With over 1,000 projects under our belt 
                and millions of tons of earth sculpted, we’ve turned landscapes into landmarks. 
                Our state-of-the-art machinery, manned by a team of elite operators, powers every 
                job with precision, passion, and purpose.
              </p>
              <p className="text-dark">
                Sustainability is our soul. We pioneer eco-friendly practices, merging raw power 
                with a green vision to build a future that’s as strong as it is sustainable. At 
                Anbu, we’re more than suppliers—we’re architects of progress, crafting monumental 
                achievements from the ground up.
              </p>
            </Fade>

            {/* Feature List */}
            <Fade direction="left" delay={200} triggerOnce>
              <ul className="list-unstyled mt-4 feature-list">
                <li className="mb-3">
                  <i className="bi bi-gear-fill text-primary me-2"></i>
                  Cutting-Edge JCB Fleet
                </li>
                <li className="mb-3">
                  <i className="bi bi-bricks text-primary me-2"></i>
                  Premium Construction Materials
                </li>
                <li className="mb-3">
                  <i className="bi bi-award-fill text-primary me-2"></i>
                  1,000+ Successful Projects
                </li>
                <li className="mb-3">
                  <i className="bi bi-tree-fill text-primary me-2"></i>
                  Eco-Friendly Innovation
                </li>
              </ul>
            </Fade>
          </div>

          {/* Image Content */}
          <div className="col-lg-6 col-md-12">
            <Fade direction="right" triggerOnce>
              <div className="about-image-wrapper">
                <img
                  src={owner}
                  alt="Anbu Suppliers and Earth Movers in Action"
                  className="img-fluid rounded shadow-lg animate-image"
                />
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;