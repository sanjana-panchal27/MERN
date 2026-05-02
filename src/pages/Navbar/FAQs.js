import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuestionCircle, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './NavHome.css';
import './AboutUs.css'; // Reuse container styles

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What is the RU Placement Cell?',
      answer: 'The RU Placement Cell is a platform that connects students with companies for internships and job placements.',
    },
    {
      question: 'How do I register on the platform?',
      answer: 'Students and companies can Sign In using their email and fill in the required details.',
    },
    {
      question: 'How can I apply for a job or internship?',
      answer: 'Navigate to the job listings, select a position, and click Apply Now.',
    },
    {
      question: 'Who can I contact for technical support?',
      answer: 'You can use the Contact Us page to send a message directly to our technical support team.',
    }
  ];

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
          <h1 className="about-title">Frequently Asked <span className="text-gradient">Questions</span></h1>
          <div className="header-underline"></div>
        </motion.div>
      </section>

      <section className="about-content" style={{ paddingBottom: '100px' }}>
        <motion.div 
          className="about-intro glass"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="about-icon-wrapper"><FaQuestionCircle /></div>
          <p className="about-desc">
            Have questions? We've got answers! Browse through our FAQs below to find
            information about our placement processes and platform.
          </p>
        </motion.div>

        <div className="faq-container" style={{ maxWidth: '800px', margin: '40px auto', padding: '0' }}>
          {faqs.map((faq, index) => (
            <motion.div 
              key={index} 
              className="faq glass"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              style={{ marginBottom: '20px', borderRadius: '16px', overflow: 'hidden' }}
            >
              <div
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '20px 30px',
                  cursor: 'pointer',
                  fontWeight: '600',
                  fontSize: '1.2rem',
                  color: openIndex === index ? 'var(--primary-color)' : 'var(--text-color)',
                  transition: 'color 0.3s'
                }}
              >
                {faq.question}
                {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </div>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ padding: '0 30px' }}
                  >
                    <p className="faq-answer" style={{ paddingBottom: '20px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FAQs;
