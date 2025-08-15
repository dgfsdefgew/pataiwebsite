import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MatrixWorldMap from './components/MatrixWorldMap';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black relative">
      <MatrixWorldMap />
      <Header />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;