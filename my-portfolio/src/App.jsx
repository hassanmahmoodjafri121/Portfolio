import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

import Home from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/footer";
import "./index.css";

function AnimatedSection({ children, delay }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      className="page-section"
      data-aos="fade-up"
      data-aos-delay={parseInt(delay * 1000)}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: parseFloat(delay) }}
    >
      {children}
    </motion.section>
  );
}

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  // Removed <Contact /> here (kept only Footer's contact info)
  const sections = [
    <Home />,
    <About />,
    <Skills />,
    <Experience />,
    <Projects />,
  ];

  const delays = ["0", "0.2", "0.4", "0.6", "0.8"];

  return (
    <>
      <main>
        {sections.map((Component, index) => (
          <AnimatedSection key={index} delay={delays[index]}>
            {Component}
          </AnimatedSection>
        ))}
      </main>
      <Footer />
    </>
  );
}

export default App;
