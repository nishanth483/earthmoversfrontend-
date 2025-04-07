// // Services.js
// import React from 'react';
// import './Services.css';

// // Import images
// import EarthMovers1 from '../images/EarthMovers1.jpeg';
// import EarthMovers2 from '../images/EarthMovers2.jpeg';
// import EarthMovers3 from '../images/EarthMovers3.jpeg';
// import EarthMovers4 from '../images/EarthMovers4.jpeg';
// import Bricks from '../images/Bricks.jpeg';
// import house from '../images/house.jpeg';

// const servicesData = [
//   {
//     id: 1,
//     title: "Excavation Services",
//     description: "Professional excavation for construction projects",
//     image: EarthMovers1
//   },
//   {
//     id: 2,
//     title: "Land Clearing",
//     description: "Efficient land clearing and preparation",
//     image: EarthMovers2
//   },
//   {
//     id: 3,
//     title: "Heavy Hauling",
//     description: "Transport of heavy equipment and materials",
//     image: EarthMovers3
//   },
//   {
//     id: 4,
//     title: "Site Preparation",
//     description: "Complete site preparation services",
//     image: EarthMovers4
//   },
//   {
//     id: 5,
//     title: "Material Supply",
//     description: "Quality construction materials delivery",
//     image: Bricks
//   },
//   {
//     id: 6,
//     title: "Foundation Work",
//     description: "Expert foundation construction",
//     image: house
//   }
// ];

// const Services = () => {
//   return (
//     <section className="services-section py-5">
//       <div className="container">
//         <h2 className="text-center mb-5">Our Earthmoving Services</h2>
//         <div className="row g-4">
//           {servicesData.map((service) => (
//             <div key={service.id} className="col-lg-4 col-md-6">
//               <div className="service-card h-100">
//                 <div 
//                   className="service-image"
//                   style={{ backgroundImage: `url(${service.image})` }}
//                 >
//                   <div className="service-overlay">
//                     <h3 className="service-title">{service.title}</h3>
//                     <p className="service-description">{service.description}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;



import React from 'react';
import './Services.css';

// Import images (reusing existing ones; replace with actual images as needed)
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
    image: EarthMovers1
  },
  {
    id: 2,
    title: "JCB Rental",
    description: "Reliable JCB rentals for excavation and construction needs",
    image: EarthMovers2
  },
  {
    id: 3,
    title: "M-Sand Supply",
    description: "High-quality manufactured sand for construction projects",
    image: EarthMovers3
  },
  {
    id: 4,
    title: "Earth Filling",
    description: "Expert earth filling services for land leveling and preparation",
    image: EarthMovers4
  },
  {
    id: 5,
    title: "Sand Suppliers",
    description: "Premium river sand delivered to your site",
    image: house // Placeholder; replace with sand-related image
  },
  {
    id: 6,
    title: "Bricks Supplier",
    description: "Durable and affordable bricks for all building needs",
    image: Bricks
  }
];

const Services = () => {
  return (
    <section className="services-section py-5">
      <div className="container">
        {/* Introductory Content */}
        <div className="intro-text text-center mb-5">
          <h1 className="intro-title animate-fade-in">Construction Solutions</h1>
          <p className="intro-description animate-slide-up">
            At Earth Movers & Land Suppliers, we provide a comprehensive range of construction and earthmoving services. 
            From heavy machinery rentals to premium material supplies, our experienced team ensures quality and efficiency 
            for every project, big or small.
          </p>
        </div>

        {/* Services Grid */}
        <h2 className="text-center mb-5 animate-fade-in">Our Services</h2>
        <div className="row g-4">
          {servicesData.map((service, index) => (
            <div key={service.id} className="col-lg-4 col-md-6">
              <div className="service-card h-100" style={{ animationDelay: `${index * 0.2}s` }}>
                <div 
                  className="service-image"
                  style={{ backgroundImage: `url(${service.image})` }}
                >
                  <div className="service-overlay">
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-description">{service.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

