import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaXTwitter } from 'react-icons/fa6';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.section
      id="contact"
      className="section contact"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      <h2>Contact Me</h2>

      <div className="contact-details">
        <p><strong>Mobile:</strong> <a href="tel:+919971373227">+91 9971373227</a></p>
        <p><strong>Email:</strong> <a href="mailto:jafri3043@gmail.com">jafri3043@gmail.com</a></p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/hassan-mahmood-70a34123a" target="_blank" rel="noopener noreferrer">linkedin.com/in/hassan-mahmood</a></p>
        <p><strong>Twitter:</strong> <a href="https://x.com/HassanJ96541" target="_blank" rel="noopener noreferrer">@HassanJ96541</a></p>
        <p><strong>GitHub:</strong> <a href="https://github.com/hassanmahmoodjafri121" target="_blank" rel="noopener noreferrer">github.com/hassanmahmoodjafri121</a></p>
      </div>

      <div className="social-icons">
        <a href="https://github.com/hassanmahmoodjafri121" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/hassan-mahmood-70a34123a" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="mailto:jafri3043@gmail.com" aria-label="Email">
          <FaEnvelope />
        </a>
        <a href="https://x.com/HassanJ96541" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FaXTwitter />
        </a>
      </div>
    </motion.section>
  );
}
