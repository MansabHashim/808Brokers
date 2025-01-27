import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SearchBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      className="relative"
      animate={{ width: isExpanded ? 300 : 40 }}
      transition={{ duration: 0.3 }}
    >
      <motion.input
        type="text"
        placeholder="Search..."
        className={`w-full bg-gray-800/50 rounded-lg border border-gray-700 px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 ${
          isExpanded ? 'pl-4' : 'pl-10'
        }`}
        onFocus={() => setIsExpanded(true)}
        onBlur={(e) => {
          if (!e.target.value) setIsExpanded(false);
        }}
      />
      <svg 
        className={`h-5 w-5 text-gray-400 absolute ${isExpanded ? 'right-3' : 'left-3'} top-2.5 pointer-events-none`}
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2"
      >
        <path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
      </svg>
    </motion.div>
  );
};

export default SearchBar; 