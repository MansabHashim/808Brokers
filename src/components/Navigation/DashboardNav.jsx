import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import SettingsMenu from '../Settings/SettingsMenu';

const DashboardNav = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const isActive = (path) => currentPath === path;

  const getLinkClass = (path) => {
    const baseClass = "flex items-center space-x-3 p-2 rounded-lg transition-colors";
    return isActive(path)
      ? `${baseClass} bg-purple-900/20 text-purple-300`
      : `${baseClass} text-gray-400 hover:bg-gray-800/50 hover:text-white`;
  };

  const [storageUsed, setStorageUsed] = useState(0.002);
  const storageLimit = 1;

  useEffect(() => {
    const fetchStorageData = async () => {
      try {
        const response = await fetch('/api/storage-info');
        const data = await response.json();
        setStorageUsed(data.usedSpace);
      } catch (error) {
        console.log('Using mock data');
        const mockUsage = Math.random() * 0.01;
        setStorageUsed(mockUsage);
      }
    };

    fetchStorageData();
    const interval = setInterval(fetchStorageData, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <motion.div 
        className="w-64 bg-gray-900/50 backdrop-blur-sm border-r border-gray-800 p-4 flex flex-col"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Logo */}
        <motion.div 
          className="flex items-center space-x-2 mb-8"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Link to="/for-you" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <svg className="h-6 w-6 text-purple-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18V5l12-2v13"></path>
              <circle cx="6" cy="18" r="3"></circle>
              <circle cx="18" cy="16" r="3"></circle>
            </svg>
            <span className="text-lg font-light tracking-wider text-white">
              808<span className="font-medium">BROKERS</span>
            </span>
          </Link>
        </motion.div>

        {/* Navigation Links */}
        <motion.nav className="space-y-2">
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -20 },
              show: { opacity: 1, x: 0 }
            }}
          >
            <Link to="/for-you" className={getLinkClass('/for-you')}>
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
              </svg>
              <span>For You</span>
            </Link>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -20 },
              show: { opacity: 1, x: 0 }
            }}
          >
            <Link to="/cloud" className={getLinkClass('/cloud')}>
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
              <span>Cloud</span>
            </Link>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -20 },
              show: { opacity: 1, x: 0 }
            }}
          >
            <Link to="/messages" className={getLinkClass('/messages')}>
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
              </svg>
              <span>Messages</span>
            </Link>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -20 },
              show: { opacity: 1, x: 0 }
            }}
          >
            <Link to="/shop" className={getLinkClass('/shop')}>
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
              </svg>
              <span>Shop</span>
            </Link>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -20 },
              show: { opacity: 1, x: 0 }
            }}
          >
            <Link to="/studio" className={getLinkClass('/studio')}>
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
              </svg>
              <span>Studio</span>
            </Link>
          </motion.div>
        </motion.nav>

        {/* Storage Stats with animation */}
        <motion.div 
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-gray-400 text-sm font-medium px-2 mb-4">STORAGE</h3>
          <div className="p-4 bg-gray-800/50 rounded-lg">
            <div className="flex justify-between mb-2">
              <span className="text-sm text-gray-400">
                {storageUsed < 0.001 
                  ? `${(storageUsed * 1000000).toFixed(1)}KB` 
                  : `${(storageUsed * 1000).toFixed(1)}MB`} used
              </span>
              <span className="text-sm text-gray-400">{storageLimit}GB total</span>
            </div>
            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-purple-600 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${(storageUsed / storageLimit) * 100}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>
          </div>
        </motion.div>

        {/* Wallet with animation */}
        <motion.div 
          className="mt-8 p-3 bg-gray-800/50 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center space-x-2">
            <svg className="h-5 w-5 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 12V8H6a2 2 0 01-2-2c0-1.1.9-2 2-2h12v4"></path>
              <path d="M4 6v12c0 1.1.9 2 2 2h14v-4"></path>
            </svg>
            <div className="text-sm">
              <div className="text-green-400">Connected</div>
              <div className="text-gray-400 text-xs">0x1234...5678</div>
            </div>
          </div>
        </motion.div>

        {/* Settings Button */}
        <button
          onClick={() => setIsSettingsOpen(true)}
          className="mt-auto p-4 text-gray-400 hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>
      </motion.div>

      <SettingsMenu 
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
      />
    </>
  );
};

export default DashboardNav; 