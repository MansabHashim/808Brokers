import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DefaultAvatar = ({ size = 'medium', onImageSelect }) => {
  const [isHovered, setIsHovered] = useState(false);
  const fileInputRef = React.useRef();

  const sizeClasses = {
    small: 'w-10 h-10',
    medium: 'w-12 h-12',
    large: 'w-32 h-32'
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        onImageSelect(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <motion.div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className={`${sizeClasses[size]} rounded-full bg-gray-800 border-2 border-gray-700 overflow-hidden cursor-pointer relative`}
        whileHover={{ scale: 1.05 }}
        onClick={handleImageClick}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent" />
      </motion.div>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-gray-900/95 backdrop-blur-sm rounded-lg px-3 py-2 text-sm text-gray-300 whitespace-nowrap border border-gray-800 shadow-xl"
          >
            Click to change picture
          </motion.div>
        )}
      </AnimatePresence>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />
    </motion.div>
  );
};

export default DefaultAvatar; 