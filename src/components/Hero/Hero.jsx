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
    <section className="relative w-full min-h-[100dvh]">
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="relative w-full h-full bg-black">
          <img 
            src={`${import.meta.env.BASE_URL}downtown.gif`}
            alt="Downtown Background" 
            className="absolute inset-0 w-full h-full object-cover opacity-75"
          />
        </div>
      </div>
      
      <div className="relative container mx-auto px-4 py-12 md:py-24 min-h-[100dvh] flex items-center z-10">
        <div className="max-w-3xl mx-auto text-center space-y-4 md:space-y-8 w-full">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6"
          >
            Welcome to <span className="text-purple-500">808Brokers</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-xl lg:text-2xl text-gray-300 font-light tracking-wide max-w-2xl mx-auto px-4 mb-8"
          >
            Search through millions of samples, beats, and music production tools with our blockchain-powered platform
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl mx-auto w-full"
          >
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search for beats, samples, or producers..."
                className="w-full px-6 py-4 bg-white/10 backdrop-blur-md rounded-lg text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:border-purple-500 transition-colors"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center space-x-8 mt-8"
          >
            <div className="text-gray-400 hover:text-white transition-colors group cursor-pointer">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-2 group-hover:bg-purple-500/20">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <span className="text-sm">Beats</span>
            </div>

            <div className="text-gray-400 hover:text-white transition-colors group cursor-pointer">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-2 group-hover:bg-purple-500/20">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-sm">Samples</span>
            </div>

            <div className="text-gray-400 hover:text-white transition-colors group cursor-pointer">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-2 group-hover:bg-purple-500/20">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <span className="text-sm">Producers</span>
            </div>
          </motion.div>
        </div>
      </div>

      {isSearchPromptOpen && (
        <SearchPrompt onClose={() => setIsSearchPromptOpen(false)} />
      )}
    </section>
  );
};

export default Hero; 
