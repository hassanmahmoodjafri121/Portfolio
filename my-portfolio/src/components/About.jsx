import React from 'react';
import profileImage from '../assets/hassanimg.jpg';

const About = () => {
  return (
    <section id="about" className="section">
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
    </section>
  );
};

export default About;
