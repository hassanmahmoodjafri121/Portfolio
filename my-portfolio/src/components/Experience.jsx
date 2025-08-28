import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaXTwitter } from 'react-icons/fa6';

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeInOut',
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.section
      id="contact"
      className="section contact"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      <motion.h2 variants={itemVariants}>Contact Me</motion.h2>

      <motion.div className="contact-details" variants={containerVariants}>
        <motion.p variants={itemVariants}>
          <strong>Mobile:</strong>{' '}
          <a href="tel:+919971373227">+91 9971373227</a>
        </motion.p>
        <motion.p variants={itemVariants}>
          <strong>Email:</strong>{' '}
          <a href="mailto:jafri3043@gmail.com">jafri3043@gmail.com</a>
        </motion.p>
        <motion.p variants={itemVariants}>
          <strong>LinkedIn:</strong>{' '}
          <a
            href="https://www.linkedin.com/in/hassan-mahmood-70a34123a"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/hassan-mahmood
          </a>
        </motion.p>
        <motion.p variants={itemVariants}>
          <strong>Twitter:</strong>{' '}
          <a
            href="https://x.com/HassanJ96541"
            target="_blank"
            rel="noopener noreferrer"
          >
            @HassanJ96541
          </a>
        </motion.p>
        <motion.p variants={itemVariants}>
          <strong>GitHub:</strong>{' '}
          <a
            href="https://github.com/hassanmahmoodjafri121"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/hassanmahmoodjafri121
          </a>
        </motion.p>
      </motion.div>

      <motion.div className="social-icons" variants={containerVariants}>
        <motion.a
          href="https://github.com/hassanmahmoodjafri121"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          variants={itemVariants}
          whileHover={{ scale: 1.2 }}
        >
          <FaGithub />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/hassan-mahmood-70a34123a"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          variants={itemVariants}
          whileHover={{ scale: 1.2 }}
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          href="mailto:jafri3043@gmail.com"
          aria-label="Email"
          variants={itemVariants}
          whileHover={{ scale: 1.2 }}
        >
          <FaEnvelope />
        </motion.a>
        <motion.a
          href="https://x.com/HassanJ96541"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          variants={itemVariants}
          whileHover={{ scale: 1.2 }}
        >
          <FaXTwitter />
        </motion.a>
      </motion.div>
    </motion.section>
  );
}
