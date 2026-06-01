import React from 'react';

const servicesData = [
  { icon: 'https://picsum.photos/800/600?random=1', title: 'Service One', description: 'Description of service one.' },
  { icon: 'https://picsum.photos/800/600?random=2', title: 'Service Two', description: 'Description of service two.' },
  { icon: 'https://picsum.photos/800/600?random=3', title: 'Service Three', description: 'Description of service three.' }
];

const Services: React.FC = () => {
  return (
    <div className="p-10" id="services">
      <h2 className="text-3xl font-bold text-center mb-6">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {servicesData.map((service, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg text-center">
            <img src={service.icon} alt={service.title} className="mb-4 rounded" />
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;