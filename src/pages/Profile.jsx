import React, { useState, useEffect } from 'react';
import DashboardNav from '../components/Navigation/DashboardNav';
import { motion, AnimatePresence } from 'framer-motion';
import DefaultAvatar from '../components/DefaultAvatar';
import PageTransition from '../components/PageTransition';

const Profile = () => {
  const [editingField, setEditingField] = useState(null);
  const [profile, setProfile] = useState({
    name: 'Your Name',
    username: '@username',
    bio: 'Tell others about yourself...',
    location: '',
    website: '',
    avatar: null,
    stats: {
      followers: 0,
      following: 0,
      tracks: 0
    },
    walletStats: {
      balance: 0.00,
      nfts: 0
    },
    recentlyViewed: [] // Track recently viewed files
  });

  const handleEdit = (field, value) => {
    setProfile(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const EditableField = ({ field, value, type = 'text' }) => {
    const [isHovered, setIsHovered] = useState(false);
    const isEditing = editingField === field;

    const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
        setEditingField(null);
      }
      if (e.key === 'Escape') {
        setEditingField(null);
      }
    };

    return (
      <motion.div
        className="relative group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={false}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {isEditing ? (
          type === 'textarea' ? (
            <textarea
              value={value}
              onChange={(e) => handleEdit(field, e.target.value)}
              onBlur={() => setEditingField(null)}
              onKeyDown={handleKeyDown}
              autoFocus
              className="w-full bg-gray-800/50 text-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500/50 resize-none transition-all duration-500"
              rows={3}
            />
          ) : (
            <input
              type="text"
              value={value}
              onChange={(e) => handleEdit(field, e.target.value)}
              onBlur={() => setEditingField(null)}
              onKeyDown={handleKeyDown}
              autoFocus
              className={`w-full bg-gray-800/50 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-500 ${
                field === 'name' ? 'text-3xl font-bold text-white' : 'text-gray-400'
              }`}
            />
          )
        ) : (
          <div 
            onClick={() => setEditingField(field)}
            className="cursor-text"
          >
            {value}
            {isHovered && !isEditing && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-500 text-sm bg-gray-800/80 px-2 py-1 rounded-md backdrop-blur-sm"
              >
                Click to edit
              </motion.div>
            )}
          </div>
        )}
      </motion.div>
    );
  };

  const StatWidget = ({ title, value, icon, color, description }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [showTooltip, setShowTooltip] = useState(true);
    const localStorageKey = `hideTooltip_${title.replace(/\s+/g, '')}`;

    useEffect(() => {
      const shouldHide = localStorage.getItem(localStorageKey);
      if (shouldHide) setShowTooltip(false);
    }, [localStorageKey]);

    const hideTooltipPermanently = () => {
      localStorage.setItem(localStorageKey, 'true');
      setShowTooltip(false);
    };

    return (
      <motion.div
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          className={`bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50 hover:border-${color}-500/50 transition-all duration-300`}
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex items-center space-x-4">
            <motion.div 
              className={`w-12 h-12 rounded-full bg-${color}-600/20 flex items-center justify-center relative`}
              animate={isHovered ? {
                scale: [1, 1.1, 1],
              } : {}}
              transition={{ duration: 0.6 }}
            >
              {/* Lightning Effect */}
              <motion.div
                className="absolute inset-0"
                animate={isHovered ? {
                  opacity: [0, 0.5, 0]
                } : { opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`absolute inset-0 rounded-full bg-${color}-500/20 blur-sm`} />
                <motion.div
                  className={`absolute top-0 left-1/2 w-px h-full bg-${color}-500/50`}
                  animate={{ 
                    scaleY: [0, 1, 0],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    repeatDelay: 0.2
                  }}
                />
              </motion.div>
              {icon}
            </motion.div>
            <div>
              <motion.div 
                className="text-2xl font-bold text-white"
                animate={isHovered ? { y: [-2, 2, -2] } : {}}
                transition={{ duration: 1, repeat: Infinity }}
              >
                {value}
              </motion.div>
              <div className="text-sm text-gray-400">
                {title}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tooltip */}
        <AnimatePresence>
          {isHovered && showTooltip && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 mt-2 w-64 p-4 bg-gray-900/95 backdrop-blur-sm rounded-lg border border-gray-800 shadow-xl z-50"
            >
              <div className="text-gray-300 text-sm mb-3">{description}</div>
              <div className="flex justify-between items-center">
                <button
                  onClick={hideTooltipPermanently}
                  className="text-xs text-gray-500 hover:text-gray-400 transition-colors"
                >
                  Don't show again
                </button>
                <button
                  onClick={() => setShowTooltip(false)}
                  className="text-xs text-purple-500 hover:text-purple-400 transition-colors"
                >
                  Got it
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen flex bg-black">
      <DashboardNav />
      
      <div className="flex-1 flex flex-col">
        <header className="h-16 bg-gray-900/50 backdrop-blur-sm border-b border-gray-800 flex items-center justify-between px-6">
          <h1 className="text-xl font-light text-white">Profile</h1>
        </header>

        <PageTransition>
          <main className="flex-1 overflow-y-auto p-6">
            <div className="max-w-6xl mx-auto">
              {/* Profile Header */}
              <motion.div 
                className="relative bg-gradient-to-br from-purple-900/20 to-black rounded-2xl p-8 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                  <DefaultAvatar size="large" />
                  
                  <div className="flex-1 text-center md:text-left space-y-4">
                    <EditableField
                      field="name"
                      value={profile.name}
                    />
                    <EditableField
                      field="username"
                      value={profile.username}
                    />
                    <EditableField
                      field="bio"
                      value={profile.bio}
                      type="textarea"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <StatWidget
                  title="Followers"
                  value={profile.stats.followers.toLocaleString()}
                  color="purple"
                  description="The number of people following you on the platform."
                  icon={
                    <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                    </svg>
                  }
                />
                <StatWidget
                  title="MATIC Balance"
                  value={profile.walletStats.balance}
                  color="purple"
                  description="Your current MATIC balance. This is used for purchasing sounds and drum kits on the platform."
                  icon={
                    <svg className="w-6 h-6 text-purple-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  }
                />
                <StatWidget
                  title="NFT Collection"
                  value={profile.walletStats.nfts}
                  color="blue"
                  description="The number of sound NFTs you own. These are unique digital assets that can be traded or sold on the marketplace."
                  icon={
                    <svg className="w-6 h-6 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  }
                />
              </div>

              {/* Activity Feed */}
              <motion.div
                className="bg-gray-900/30 rounded-xl p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="text-xl font-bold text-white mb-6">Recent Activity</h3>
                <div className="text-gray-400 text-center py-8">
                  No activity yet. Your recently viewed files will appear here.
                </div>
              </motion.div>
            </div>
          </main>
        </PageTransition>
      </div>
    </div>
  );
};

// Update the page transition component to use slower animations
const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 1.2, ease: "easeInOut" }
};

export default Profile; 