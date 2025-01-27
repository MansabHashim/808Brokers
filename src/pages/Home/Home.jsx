import React from 'react';
import Hero from '../../components/Hero/Hero';
import Features from '../../components/Features/Features';
import Content from '../../components/Content/Content';
import CTA from '../../components/CTA/CTA';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <Features />
      <Content />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home; 