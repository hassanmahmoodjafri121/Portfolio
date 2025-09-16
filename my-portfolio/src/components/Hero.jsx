import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      when: 'beforeChildren',
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.section
      id="home"
      className="section home"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      exit="hidden"
    >
      <motion.div className="home-content" variants={containerVariants}>
        <motion.h1 variants={itemVariants}>
          Hello, I'm <span className="highlight">Hassan</span>
        </motion.h1>
        <motion.h2 variants={itemVariants}>
          A Passionate Full Stack Developer
        </motion.h2>
        <motion.p variants={itemVariants}>
          I specialize in building responsive, high-performance, and visually engaging web applications.
        </motion.p>
        <motion.p variants={itemVariants}>
          Let’s create something amazing together!
        </motion.p>

        {/* Resume Download Button Only */}
        <motion.div
          className="button-row"
          style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'center' }}
        >
          <motion.a
            href="/resume.pdf"
            download="Hassan_Resume.pdf"
            className="btn-cta resume-btn"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
