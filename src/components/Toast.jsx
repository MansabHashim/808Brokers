import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Toast = ({ message, type = 'success', onClose }) => {
  React.useEffect(() => {
    const timer = setTimeout(onClose, 2000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className={`fixed bottom-4 right-4 px-6 py-3 rounded-lg shadow-lg backdrop-blur-sm z-50 
        ${type === 'success' ? 'bg-green-500/90 text-white' : 'bg-red-500/90 text-white'}`}
    >
      {message}
    </motion.div>
  );
};

export default Toast; 