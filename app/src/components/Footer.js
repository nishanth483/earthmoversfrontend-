// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2023 Earth Movers & Land Suppliers</p>
    </footer>
  );
};

const styles = {
  footer: { textAlign: 'center', padding: '10px', backgroundColor: '#333', color: '#fff', marginTop: '20px' },
};

export default Footer;