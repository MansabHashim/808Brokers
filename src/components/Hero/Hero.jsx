import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SearchPrompt from '../Modal/SearchPrompt';

const Hero = () => {
  const [isSearchPromptOpen, setIsSearchPromptOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    setIsSearchPromptOpen(true);
  };

  return (
    <section className="relative w-full min-h-screen">
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img 
          src="/images/downtown.gif" 
          alt="Downtown Background" 
          className="w-full h-full object-cover object-center opacity-50" 
        />
      </div>
      
      <div className="relative container mx-auto px-4 py-24 min-h-screen flex items-center">
        <div className="max-w-3xl mx-auto text-center space-y-8 w-full">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold text-white mb-6"
          >
            Welcome to <span className="text-purple-500">808Brokers</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl lg:text-2xl text-gray-400 font-light tracking-wide max-w-2xl mx-auto"
          >
            Search through millions of samples, beats, and music production tools with our AI-powered platform
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative max-w-xl mx-auto"
          >
            <form onSubmit={handleSearch}>
              <input 
                type="text"
                placeholder="Search beats and artists..."
                className="w-full px-4 py-3 text-base bg-gray-900/50 text-white border border-gray-800 rounded-lg focus:outline-none focus:border-purple-500/50 placeholder-gray-500 font-light backdrop-blur-sm"
              />
              <button 
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-purple-900/20 text-purple-300 p-2 rounded-lg hover:bg-purple-900/30 transition-colors"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="M21 21l-4.35-4.35"></path>
                </svg>
              </button>
            </form>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 max-w-2xl mx-auto"
          >
            <div className="bg-black/30 backdrop-blur-sm p-4 rounded-lg border border-gray-800">
              <div className="text-2xl sm:text-3xl font-medium text-white">50K+</div>
              <div className="text-sm text-gray-400">Producers</div>
            </div>
            <div className="bg-black/30 backdrop-blur-sm p-4 rounded-lg border border-gray-800">
              <div className="text-2xl sm:text-3xl font-medium text-white">1M+</div>
              <div className="text-sm text-gray-400">Samples</div>
            </div>
            <div className="bg-black/30 backdrop-blur-sm p-4 rounded-lg border border-gray-800">
              <div className="text-2xl sm:text-3xl font-medium text-white">100K+</div>
              <div className="text-sm text-gray-400">Beats</div>
            </div>
            <div className="bg-black/30 backdrop-blur-sm p-4 rounded-lg border border-gray-800">
              <div className="text-2xl sm:text-3xl font-medium text-white">24/7</div>
              <div className="text-sm text-gray-400">Support</div>
            </div>
          </motion.div>
        </div>
      </div>

      <SearchPrompt 
        isOpen={isSearchPromptOpen}
        onClose={() => setIsSearchPromptOpen(false)}
      />
    </section>
  );
};

export default Hero; 