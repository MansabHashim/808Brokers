import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation/Navigation';
import Hero from '../components/Hero/Hero';
import Features from '../components/Features/Features';
import Content from '../components/Content/Content';
import Footer from '../components/Footer/Footer';

const Landing = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      {/* Hero Section */}
      <Hero />

      {/* Main Content */}
      <main>
        {/* Features Grid */}
        <Features />

        {/* Content Sections */}
        <Content />
      </main>

      {/* Footer */}
      <Footer />

      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-black" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>
    </div>
  );
};

export default Landing; 