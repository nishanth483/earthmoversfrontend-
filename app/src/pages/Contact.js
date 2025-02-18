// src/pages/Contact.js
import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace this URL with your backend API endpoint
      await axios.post('http://localhost:5000/api/contact', formData);
      alert('Your query has been submitted successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error(error);
      alert('An error occurred. Please try again.');
    }
  };
  
  return (
    <div style={styles.container}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Message:</label>
        <textarea name="message" value={formData.message} onChange={handleChange} required />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const styles = {
  container: { padding: '20px' },
  form: { display: 'flex', flexDirection: 'column', gap: '10px' },
};

export default Contact;