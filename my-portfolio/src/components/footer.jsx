import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.footer
      className="footer"
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <p>&copy; {new Date().getFullYear()} Hassan Mahmood. All rights reserved.</p>

      <div className="footer-social-icons">
        <a
          href="https://github.com/hassanmahmoodjafri121"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/hassan-mahmood-70a34123a"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="mailto:jafri3043@gmail.com"
          aria-label="Email"
        >
          <i className="fas fa-envelope"></i>
        </a>
        <a
          href="https://x.com/HassanJ96541"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <i className="fab fa-x-twitter"></i>
        </a>
      </div>
    </motion.footer>
  );
}
