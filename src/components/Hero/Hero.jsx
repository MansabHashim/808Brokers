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
            src="/downtown.gif"
            alt="Downtown Background" 
            className="absolute inset-0 w-full h-full object-cover opacity-75"
            style={{ objectPosition: 'center center' }}
            loading="eager"
            priority="true"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      </div>
      
      <div className="relative container mx-auto px-4 min-h-[100dvh] flex items-start z-10" style={{ paddingTop: '25vh' }}>
        <div className="max-w-3xl mx-auto text-center w-full">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold text-white mb-8"
          >
            Welcome to <span className="text-purple-500">808Brokers</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-xl lg:text-2xl text-gray-300 font-light tracking-wide max-w-2xl mx-auto px-4 mb-12"
          >
            Search through millions of samples, beats, and music production tools with our blockchain-powered platform
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl mx-auto px-4"
          >
            <form onSubmit={handleSearch}>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for beats, samples, or producers..."
                  className="w-full px-8 py-5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
                />
                <button
                  type="submit"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors p-2"
                >
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col items-center mt-12"
          >
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              <span className="flex items-center bg-white/5 hover:bg-white/10 px-5 py-2.5 rounded-full border border-white/10 transition-colors cursor-pointer">
                <svg className="w-4 h-4 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-gray-300">Polygon Network</span>
              </span>
              <span className="flex items-center bg-white/5 hover:bg-white/10 px-5 py-2.5 rounded-full border border-white/10 transition-colors cursor-pointer">
                <svg className="w-4 h-4 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
                <span className="text-gray-300">Cloud Storage</span>
              </span>
              <span className="flex items-center bg-white/5 hover:bg-white/10 px-5 py-2.5 rounded-full border border-white/10 transition-colors cursor-pointer">
                <svg className="w-4 h-4 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
                <span className="text-gray-300">Premium Samples</span>
              </span>
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
