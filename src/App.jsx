// App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Service from './components/Service';
import Contact from './components/Contact'; 
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Projects />
      <Contact /> 
      <Footer />
    </div>
  );
}

export default App;
