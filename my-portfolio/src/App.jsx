import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Home from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/footer";
import "./index.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  const sections = [
    <Home />,
    <About />,
    <Skills />,
    <Experience />,
    <Projects />,
    <Contact />,
  ];

  const delays = ["0", "200", "400", "600", "800", "1000"];

  return (
    <>
      <main>
        {sections.map((Component, index) => (
          <section
            key={index}
            className="page-section"
            data-aos="fade-up"
            data-aos-delay={delays[index]}
          >
            {Component}
          </section>
        ))}
      </main>
      <Footer />
    </>
  );
}

export default App;
