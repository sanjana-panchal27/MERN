import { useState } from 'react';
import './NavHome.css';

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What is the RU Placement Cell?',
      answer:
        'The RU Placement Cell is a platform that connects students with companies for internships and job placements.',
    },
    {
      question: 'How do I register on the platform?',
      answer:
        'Students and companies can Sign In using their email and fill in the required details.',
    },
    {
      question: 'How can I apply for a job or internship?',
      answer:
        'Navigate to the job listings, select a position, and click Apply Now.',
    },
  ];

  return (
    <>
      <div className="hero-faqs">
        <h1>
          FAQ's
          <hr></hr>
        </h1>
      </div>

      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div key={index} className="faq">
            <h3
              className={`faq-question ${openIndex === index ? 'open' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
            </h3>

            {openIndex === index && <p className="faq-answer">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </>
  );
};

export default FAQs;
