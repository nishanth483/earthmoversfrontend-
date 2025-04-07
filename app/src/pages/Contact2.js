// src/pages/Contact2.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './Contact2.css';
import { FaUser, FaEnvelope, FaComment, FaPaperPlane } from 'react-icons/fa';

const Contact2 = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Replace with your backend API endpoint
      await axios.post('http://localhost:5000/api/contact', formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error(error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section">
      <div className="container py-5">
        {/* Header */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold contact-title animate__animated animate__pulse">
            Get In Touch
          </h1>
          <p className="lead text-muted mt-3 animate__animated animate__fadeInUp">
            We'd love to hear from you! Send us a message and let's start building together.
          </p>
        </div>

        {/* Contact Form */}
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="contact-card animate__animated animate__zoomIn">
              <form onSubmit={handleSubmit} className="p-4">
                <div className="form-group mb-4 position-relative">
                  <label className="form-label">
                    <FaUser className="form-icon" /> Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control"
                    required
                    placeholder="Enter your name"
                  />
                </div>

                <div className="form-group mb-4 position-relative">
                  <label className="form-label">
                    <FaEnvelope className="form-icon" /> Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                    required
                    placeholder="Enter your email"
                  />
                </div>

                <div className="form-group mb-4 position-relative">
                  <label className="form-label">
                    <FaComment className="form-icon" /> Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-control"
                    required
                    rows="5"
                    placeholder="Tell us about your project"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100 d-flex align-items-center justify-content-center gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  ) : (
                    <>
                      <FaPaperPlane /> Send Message
                    </>
                  )}
                </button>

                {/* Submission Feedback */}
                {submitStatus === 'success' && (
                  <div className="alert alert-success mt-3 animate__animated animate__fadeIn">
                    Your query has been submitted successfully!
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="alert alert-danger mt-3 animate__animated animate__fadeIn">
                    An error occurred. Please try again.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact2;