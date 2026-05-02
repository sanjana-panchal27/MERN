import React from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaEnvelope, FaUser, FaCommentDots } from 'react-icons/fa';
import './NavHome.css';
import './AboutUs.css';
import './Contact.css';

const Contact = () => {
  return (
    <div className="about-wrapper">
      <section className="about-hero">
        <div className="hero-background-overlay"></div>
        <motion.div 
          className="about-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="about-title">Contact <span className="text-gradient">Us</span></h1>
          <div className="header-underline"></div>
        </motion.div>
      </section>

      <section className="about-content">
        <motion.div 
          className="about-intro glass"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="about-icon-wrapper"><FaPaperPlane /></div>
          <p className="about-desc">
            Got a question? We'd love to hear from you! Reach out to us for any
            queries related to placements, internships, or recruitment.
          </p>
        </motion.div>

        <motion.div 
          className="contact-container glass"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="contact-header">
            <h2 className="text-gradient">Send a Message</h2>
            <p>Fill out the form below and we will get back to you shortly.</p>
          </div>
          
          <form
            action="https://formspree.io/f/maneqnpb"
            method="POST"
            className="contact-form"
          >
            <motion.div 
              className="input-group"
              whileFocus={{ scale: 1.02 }}
            >
              <FaUser className="input-icon" />
              <input
                className="contact-input"
                type="text"
                name="username"
                placeholder="Your Full Name"
                autoComplete="off"
                required
              />
            </motion.div>
            
            <motion.div 
              className="input-group"
              whileFocus={{ scale: 1.02 }}
            >
              <FaEnvelope className="input-icon" />
              <input
                className="contact-input"
                type="email"
                name="Email"
                placeholder="Your Email Address"
                autoComplete="off"
                required
              />
            </motion.div>

            <motion.div 
              className="input-group textarea-group"
              whileFocus={{ scale: 1.02 }}
            >
              <FaCommentDots className="input-icon" />
              <textarea
                className="contact-input contact-textarea"
                name="message"
                placeholder="Write your message here... (Max 1000 words)"
                autoComplete="off"
                maxLength={8000}
                required
              ></textarea>
            </motion.div>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit" 
              className="submit-btn"
            >
              Send Message <FaPaperPlane style={{ fontSize: '0.9em' }} />
            </motion.button>
          </form>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;

