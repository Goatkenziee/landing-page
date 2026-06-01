import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-10 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our Service</h1>
      <p className="text-lg mb-6">Your journey to excellence starts here.</p>
      <a href="#services" className="bg-blue-700 text-white px-6 py-3 rounded hover:bg-blue-600 transition">Get Started</a>
    </div>
  );
};

export default Hero;