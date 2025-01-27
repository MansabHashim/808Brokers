import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="about-content">
        <div className="about-text">
          <h2>About 808 Brokers</h2>
          <p>
            We are a leading digital asset management firm dedicated to providing 
            professional and secure services to our clients. With years of experience 
            in the digital asset space, we combine traditional financial expertise 
            with cutting-edge technology.
          </p>
          <p>
            Our team of experts is committed to delivering exceptional service and 
            helping our clients navigate the complex world of digital assets.
          </p>
        </div>
        <div className="about-image">
          <img src="/about-image.jpg" alt="808 Brokers Team" />
        </div>
      </div>
    </div>
  );
};

export default About; 