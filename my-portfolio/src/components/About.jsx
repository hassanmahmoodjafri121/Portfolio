import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import profileImage from '../assets/hassanimg.jpg';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.section
      id="about"
      className="section page-section"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      <h2>About Me</h2>
      <div className="about-container">
        <img
          src={profileImage}
          alt="Hassan Mahmood"
          className="profile-img"
          loading="lazy"
        />
        <div className="about-text">
          <p>
            Hello! I'm <strong>Hassan Mahmood</strong>, a passionate Full Stack Developer and designer
            with a love for clean code and beautiful design. I specialize in creating
            responsive and interactive web applications using modern technologies.
          </p>
          <p>
            With experience in React, JavaScript, HTML, CSS, and more, I craft
            websites that are fast, user-friendly, and visually engaging.
            <br />
            <strong>Let's build something amazing together!</strong>
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
