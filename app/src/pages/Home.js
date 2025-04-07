

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import EarthMovers1 from '../images/EarthMovers1.jpeg';
import EarthMovers2 from '../images/EarthMovers2.jpeg';
import EarthMovers3 from '../images/EarthMovers3.jpeg';
import EarthMovers4 from '../images/EarthMovers4.jpeg';
import './Home.css';
import owner from '../images/owner.jpg';
import Services from './Services';

const Home = () => {
  // Array of image sources for "Our Products" slider
  const projectImages = [EarthMovers1, EarthMovers2, EarthMovers3, EarthMovers4];
  const groupedImages = [];
  for (let i = 0; i < projectImages.length; i += 2) {
    groupedImages.push(projectImages.slice(i, i + 2));
  }

  // Array of testimonials for "What Our Clients Say" slider
  const testimonials = [
    {
      quote: "Earth Movers delivered exceptional service for our construction project. Highly recommend them!",
      author: "John Doe",
    },
    {
      quote: "Professional, reliable, and efficient. They exceeded our expectations!",
      author: "Jane Smith",
    },
    {
      quote: "Their team is knowledgeable and dedicated. We will definitely work with them again.",
      author: "Mark Johnson",
    },
    {
      quote: "Outstanding quality and timely delivery. A pleasure to work with!",
      author: "Emily Davis",
    },
    {
      quote: "They transformed our land with precision and care. Top-notch service!",
      author: "Robert Brown",
    },
    {
      quote: "Best in the business! Their expertise made our project a success.",
      author: "Sarah Wilson",
    },
  ];

  const productSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: true,
  };

  const testimonialSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 testimonials per slide on desktop
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 768, // Adjust for tablets and smaller screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576, // Adjust for mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="home-container">
      {/* First Card: Owner Image and Content */}
      <div className="container mb-5">
        <div className="card shadow rounded overflow-hidden d-flex flex-column flex-md-row">
          <div className="card-image col-md-6 p-0">
            <img src={owner} alt="Owner of Earth Movers" className="w-100 h-100 object-fit-cover" />
          </div>
          <div className="card-content col-md-6 p-4 text-center text-md-start">
            <h1 className="mb-3">Welcome to Earth Movers & Land Suppliers</h1>
            <p className="mb-3">
              At Earth Movers & Land Suppliers, we specialize in providing top-notch services for land development,
              excavation, and earthmoving projects. Our team of experts is committed to delivering high-quality results
              with professionalism and efficiency.
            </p>
            <p className="mb-4">
              Whether you're planning a residential project, commercial development, or infrastructure work, we have
              the tools, expertise, and dedication to bring your vision to life.
            </p>
            <button className="btn btn-primary">Learn More</button>
          </div>
        </div>
      </div>

      {/* Product Slider Section */}
      <div className="container mb-5">
        <h2 className="text-center mb-4">Our Products</h2>
        <Slider {...productSliderSettings}>
          {groupedImages.map((pair, index) => (
            <div key={index} className="slider-slide">
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                {pair.map((image, idx) => (
                  <img
                    key={idx}
                    src={image}
                    alt={`Project ${index * 2 + idx + 1}`}
                    className="slider-image img-fluid rounded shadow"
                    style={{
                      width: '48%',
                      height: '300px',
                      objectFit: 'cover',
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <Services />

      {/* Testimonials Slider Section */}
      <div className="container mb-5">
        <h2 className="text-center mb-4">What Our Clients Say</h2>
        <Slider {...testimonialSliderSettings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-2">
              <div className="testimonial-card shadow rounded p-4 text-center">
                <p className="mb-3">"{testimonial.quote}"</p>
                <p className="author fw-bold">- {testimonial.author}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Call-to-Action Section */}
      <div className="cta-section text-center py-5 bg-primary text-white rounded">
        <h2 className="mb-4">Ready to Get Started?</h2>
        <p className="mb-5">Contact us today to discuss your project and get a free quote!</p>
        <button className="btn btn-light fw-bold">Get a Quote</button>
      </div>
    </div>
  );
};

export default Home;