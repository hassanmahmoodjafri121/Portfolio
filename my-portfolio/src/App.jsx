// src/App.jsx
import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from "./components/Footer";
import './index.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <>
      <Header menuOpen={menuOpen} toggleMenu={toggleMenu} />
      <main>
        <Home />
        <About />
        <Skills />
        <Experience /> {/* ✅ Added here */}
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
