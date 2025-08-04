import React from 'react';

export default function Home() {
  return (
    <section id="home" className="section home">
      <div className="home-content">
        <h1>Hello, I'm <span className="highlight">Hassan</span></h1>
        <h2>A Passionate Full Stack Developer</h2>
        <p>
          I specialize in building responsive, high-performance, and visually engaging web applications.
        </p>
        <p>
          Let’s create something amazing together!
        </p>
        <a href="#contact" className="btn-cta">Contact Me</a>
      </div>
    </section>
  );
}
