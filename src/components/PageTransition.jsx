import React from 'react';
import { motion } from 'framer-motion';

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ 
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] // Custom cubic-bezier for smooth transition
      }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition; 