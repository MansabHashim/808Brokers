import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: "Digital Asset Management",
      description: "Professional management of your digital assets portfolio",
      icon: "💼"
    },
    {
      title: "Investment Strategy",
      description: "Customized investment strategies for optimal returns",
      icon: "📈"
    },
    {
      title: "Security Solutions",
      description: "Top-tier security measures for your digital assets",
      icon: "🔒"
    }
  ];

  return (
    <div className="services">
      <h2>Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services; 