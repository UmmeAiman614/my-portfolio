// src/App.jsx
import React from 'react';
import { ThemeProvider } from './context/ThemeContext'; // <-- NEW IMPORT
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Proficiency from './components/Proficiency';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    // Wrap the entire application with ThemeProvider
    <ThemeProvider>
      {/* The 'dark' or 'light' class is applied to the root (<html>) element
        by the ThemeContext, making this wrapper redundant for styling,
        but it defines the overall structure.
      */}
      <div className="min-h-screen font-sans">
        <Header />
        <main className="container mx-auto">
            <Hero />
            <About />
            <Proficiency />
            <Education />
            <Experience />
            <Projects />
            <Contact />
            <Footer />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;