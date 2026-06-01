import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <Hero />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;