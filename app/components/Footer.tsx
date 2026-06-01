import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="p-6 bg-gray-900 text-center">
      <p>Follow us on</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="#" className="text-blue-500 hover:underline">Facebook</a>
        <a href="#" className="text-blue-500 hover:underline">Twitter</a>
        <a href="#" className="text-blue-500 hover:underline">LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;