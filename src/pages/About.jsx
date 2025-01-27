import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation/Navigation';

const About = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-white mb-8">About 808Brokers</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-gray-400 mb-6">
              808Brokers is revolutionizing the way music producers create, collaborate, and distribute their work. 
              Our platform combines cutting-edge technology with a passion for music production.
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Our Mission</h2>
            <p className="text-gray-400 mb-6">
              We're building the future of music production by creating tools that empower artists 
              and producers to focus on what matters most - their creativity.
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Team</h2>
            <p className="text-gray-400 mb-6">
              Our team consists of music producers, software engineers, and industry veterans 
              who understand the challenges of modern music production.
            </p>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default About; 