// src/pages/Services.js
import React from 'react';

const Services = () => {
  const vehicles = [
    { id: 1, name: 'Bulldozer', availability: true },
    { id: 2, name: 'Excavator', availability: false },
    { id: 3, name: 'Dump Truck', availability: true },
  ];

  return (
    <div style={styles.container}>
      <h1>Our Services</h1>
      <h2>List of Vehicles Available</h2>
      <ul style={styles.list}>
        {vehicles.map((vehicle) => (
          <li key={vehicle.id} style={vehicle.availability ? styles.available : styles.unavailable}>
            {vehicle.name} - {vehicle.availability ? 'Available' : 'Not Available'}
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: { padding: '20px' },
  list: { listStyle: 'none', padding: 0 },
  available: { color: 'green' },
  unavailable: { color: 'red' },
};

export default Services;