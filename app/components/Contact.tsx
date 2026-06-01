import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="p-10 bg-gray-800 text-center">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <form className="flex flex-col items-center">
        <input type="text" placeholder="Your Name" className="mb-4 p-2 rounded" required />
        <input type="email" placeholder="Your Email" className="mb-4 p-2 rounded" required />
        <textarea placeholder="Your Message" className="mb-4 p-2 rounded" rows={4} required></textarea>
        <button type="submit" className="bg-blue-700 text-white px-6 py-3 rounded hover:bg-blue-600 transition">Send</button>
      </form>
    </div>
  );
};

export default Contact;