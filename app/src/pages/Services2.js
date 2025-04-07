import React, { useEffect, useState } from 'react';
import './Services.css';
import { FaTractor, FaTruck, FaCube, FaLevelUpAlt, FaWater, FaCubes } from 'react-icons/fa';

// Import images with fallback
import EarthMovers1 from '../images/EarthMovers1.jpeg';
import EarthMovers2 from '../images/EarthMovers2.jpeg';
import EarthMovers3 from '../images/EarthMovers3.jpeg';
import EarthMovers4 from '../images/EarthMovers4.jpeg';
import Bricks from '../images/Bricks.jpeg';
import house from '../images/house.jpeg';

const servicesData = [
  {
    id: 1,
    title: "Earthmovers",
    description: "Heavy-duty earthmoving solutions for all types of terrain",
    image: EarthMovers1 || "https://via.placeholder.com/250",
    icon: <FaTractor />,
    color: "#ff6b6b",
  },
  {
    id: 2,
    title: "JCB Rental",
    description: "Reliable JCB rentals for excavation and construction needs",
    image: EarthMovers2 || "https://via.placeholder.com/250",
    icon: <FaTruck />,
    color: "#4ecdc4",
  },
  {
    id: 3,
    title: "M-Sand Supply",
    description: "High-quality manufactured sand for construction projects",
    image: EarthMovers3 || "https://via.placeholder.com/250",
    icon: <FaCube />,
    color: "#45b7d1",
  },
  {
    id: 4,
    title: "Earth Filling",
    description: "Expert earth filling services for land leveling and preparation",
    image: EarthMovers4 || "https://via.placeholder.com/250",
    icon: <FaLevelUpAlt />,
    color: "#96c93d",
  },
  {
    id: 5,
    title: "Sand Suppliers",
    description: "Premium river sand delivered to your site",
    image: house || "https://via.placeholder.com/250",
    icon: <FaWater />,
    color: "#f7d794",
  },
  {
    id: 6,
    title: "Bricks Supplier",
    description: "Durable and affordable bricks for all building needs",
    image: Bricks || "https://via.placeholder.com/250",
    icon: <FaCubes />,
    color: "#778beb",
  },
];

const Services2 = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger visibility after component mounts
    setIsVisible(true);
  }, []);

  return (
    <section className="services-section">
      <div className="container py-5">
        {/* Header Section */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold services-title">
            Our Premium Services
          </h1>
          <p className="lead text-muted mt-3">
            Delivering top-notch construction solutions with passion and precision
          </p>
        </div>

        {/* Services Grid */}
        <div className="row g-4">
          {servicesData.map((service, index) => (
            <div key={service.id} className="col-lg-4 col-md-6">
              <div
                className={`service-card ${isVisible ? 'visible' : ''}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="card-image" style={{ backgroundImage: `url(${service.image})` }}>
                  <div className="card-overlay" style={{ background: `${service.color}80` }}>
                    <div className="icon-circle" style={{ background: service.color }}>
                      {service.icon}
                    </div>
                  </div>
                </div>
                <div className="card-body p-4">
                  <h3 className="card-title">{service.title}</h3>
                  <p className="card-text">{service.description}</p>
                  <button
                    className="btn btn-outline-primary btn-sm"
                    style={{ borderColor: service.color, color: service.color }}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services2;