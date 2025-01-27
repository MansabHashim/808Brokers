import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const StudioPrompt = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-gray-900 rounded-lg p-6 max-w-md w-full mx-4 border border-gray-800"
        >
          <h3 className="text-xl font-bold text-white mb-4">Connect to Access Studio</h3>
          <p className="text-gray-400 mb-6">
            Connect your wallet to access the 808Brokers studio and start creating.
          </p>
          <div className="flex justify-end space-x-4">
            <button
              onClick={onClose}
              className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                // Add your wallet connection logic here
                onClose();
              }}
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              Connect Wallet
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default StudioPrompt; 