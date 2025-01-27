import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation/Navigation';

const Home = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <main className="pt-24 container mx-auto px-4">
        <section className="flex flex-col md:flex-row items-center justify-between py-20">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold text-white mb-6">
              Welcome to <span className="text-purple-500">808BROKERS</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Connect, create, and collaborate with the world's most innovative music community.
            </p>
            <div className="flex space-x-4">
              <Link 
                to="/explore" 
                className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Start Exploring
              </Link>
              <Link 
                to="/learn" 
                className="border border-purple-600 text-purple-500 px-8 py-3 rounded-lg hover:bg-purple-600/10 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </motion.div>

          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img 
              src="/logo-animation.gif" 
              alt="808 Brokers Platform" 
              className="w-full max-w-lg mx-auto rounded-lg shadow-2xl"
            />
          </motion.div>
        </section>

        {/* Add more sections as needed */}
      </main>
    </div>
  );
};

export default Home; 