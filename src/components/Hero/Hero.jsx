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
            className="absolute inset-0 w-full h-full object-cover opacity-50"
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              zIndex: 0
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
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
            className="text-base md:text-xl lg:text-2xl text-gray-400 font-light tracking-wide max-w-2xl mx-auto px-4"
          >
            Search through millions of samples, beats, and music production tools with our AI-powered platform
          </motion.p>
        </div>
      </div>

      {isSearchPromptOpen && (
        <SearchPrompt onClose={() => setIsSearchPromptOpen(false)} />
      )}
    </section>
  );
};

export default Hero; 