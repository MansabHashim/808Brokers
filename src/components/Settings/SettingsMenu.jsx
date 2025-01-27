import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const SettingsMenu = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [logoutTimer, setLogoutTimer] = useState(null);
  const [activeTab, setActiveTab] = useState('account');
  const [blockedUsers] = useState([
    { id: 1, username: 'user1', blockedAt: '2024-02-20' },
    { id: 2, username: 'user2', blockedAt: '2024-02-19' }
  ]);

  const handleLogout = () => {
    setShowLogoutConfirm(true);
    // Set 30-second auto-logout timer
    const timer = setTimeout(() => {
      performLogout();
    }, 30000);
    setLogoutTimer(timer);
  };

  const cancelLogout = () => {
    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
    setShowLogoutConfirm(false);
  };

  const performLogout = () => {
    // Clear any stored user data/tokens
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    
    // Close the settings menu
    onClose();
    
    // Show logout message and redirect to home
    const message = 'You have been successfully logged out';
    
    // Navigate to the homepage (root) with the logout message
    window.location.href = `/?message=${encodeURIComponent(message)}`;
  };

  const TabButton = ({ id, label }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors
        ${activeTab === id 
          ? 'bg-purple-600 text-white' 
          : 'text-gray-400 hover:text-white hover:bg-gray-800'}`}
    >
      {label}
    </button>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'account':
        return (
          <div className="space-y-6">
            <section>
              <h3 className="text-lg font-medium text-white mb-4">Security Settings</h3>
              <div className="space-y-4">
                <button className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 text-left flex justify-between items-center">
                  <span>Two-Factor Authentication</span>
                  <span className="text-red-400 text-sm">Disabled</span>
                </button>
                <button className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 text-left flex justify-between items-center">
                  <span>Login History</span>
                  <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <button className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 text-left flex justify-between items-center">
                  <span>Active Sessions</span>
                  <span className="text-sm text-gray-400">2 devices</span>
                </button>
                <button className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 text-left flex justify-between items-center">
                  <span>Change Password</span>
                  <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-medium text-white mb-4">Recovery</h3>
              <div className="space-y-4">
                <button className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 text-left flex justify-between items-center">
                  <span>Recovery Email</span>
                  <span className="text-sm text-gray-400">Not set</span>
                </button>
                <button className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 text-left flex justify-between items-center">
                  <span>Backup Codes</span>
                  <span className="text-sm text-gray-400">Generate</span>
                </button>
              </div>
            </section>
          </div>
        );

      case 'wallet':
        return (
          <div className="space-y-6">
            <section>
              <h3 className="text-lg font-medium text-white mb-4">Wallet Settings</h3>
              <div className="space-y-4">
                <div className="bg-gray-800 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400">Connected Wallet</span>
                    <span className="text-purple-400">0x1234...5678</span>
                  </div>
                  <button className="w-full px-4 py-2 bg-purple-600/20 text-purple-400 rounded-lg hover:bg-purple-600/30 mt-2">
                    Disconnect Wallet
                  </button>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Auto-confirm transactions under</span>
                    <input
                      type="number"
                      className="w-24 bg-gray-700 rounded px-3 py-1 text-white"
                      placeholder="0.01"
                    /> MATIC
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Show gas fees</span>
                    <button className="w-12 h-6 bg-purple-600 rounded-full relative">
                      <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
                    </button>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-medium text-white mb-4">Transaction History</h3>
              <div className="space-y-2">
                <div className="bg-gray-800/50 rounded-lg p-3 flex justify-between items-center">
                  <div>
                    <div className="text-white">Skip Payment</div>
                    <div className="text-sm text-gray-400">2024-02-20</div>
                  </div>
                  <div className="text-purple-400">0.0001 MATIC</div>
                </div>
              </div>
            </section>
          </div>
        );

      case 'privacy':
        return (
          <div className="space-y-6">
            <section>
              <h3 className="text-lg font-medium text-white mb-4">Account Management</h3>
              <div className="space-y-4">
                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                  <h4 className="text-yellow-500 font-medium mb-2">Transfer Account</h4>
                  <p className="text-sm text-gray-400 mb-3">
                    Transfer your account to another wallet address. Cost: 0.1 MATIC
                  </p>
                  <button className="w-full px-4 py-2 bg-yellow-500/20 text-yellow-500 rounded-lg hover:bg-yellow-500/30">
                    Transfer Account
                  </button>
                </div>

                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                  <h4 className="text-red-500 font-medium mb-2">Delete Account</h4>
                  <p className="text-sm text-gray-400 mb-3">
                    Permanently delete your account and all associated data. Cost: 0.05 MATIC
                  </p>
                  <button className="w-full px-4 py-2 bg-red-500/20 text-red-500 rounded-lg hover:bg-red-500/30">
                    Delete Account
                  </button>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-medium text-white mb-4">Blocked Users</h3>
              <div className="space-y-3">
                {blockedUsers.map(user => (
                  <div key={user.id} className="flex justify-between items-center bg-gray-800/50 rounded-lg p-3">
                    <div>
                      <div className="text-white">@{user.username}</div>
                      <div className="text-sm text-gray-400">Blocked on {user.blockedAt}</div>
                    </div>
                    <button className="px-3 py-1 bg-red-600/20 text-red-400 rounded hover:bg-red-600/30">
                      Unblock
                    </button>
                  </div>
                ))}
              </div>
            </section>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            className="absolute right-0 top-0 bottom-0 w-[480px] bg-gray-900 shadow-xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="p-6 h-full flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white">Settings</h2>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-white"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="flex space-x-2 mb-6">
                <TabButton id="account" label="Account" />
                <TabButton id="wallet" label="Wallet" />
                <TabButton id="privacy" label="Privacy" />
              </div>

              <div className="flex-1 overflow-y-auto">
                {renderTabContent()}
              </div>

              <div className="pt-6 border-t border-gray-800 mt-6">
                <button
                  onClick={handleLogout}
                  className="w-full px-4 py-2 bg-red-600/20 text-red-500 rounded-lg hover:bg-red-600/30 transition-colors"
                >
                  Logout
                </button>
              </div>
            </div>
          </motion.div>

          {/* Logout Confirmation */}
          <AnimatePresence>
            {showLogoutConfirm && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-900 rounded-xl p-6 max-w-md w-full mx-4"
              >
                <h3 className="text-xl font-bold text-white mb-2">Logging Out</h3>
                <p className="text-gray-400 mb-6">
                  You will be automatically logged out in 30 seconds. Click cancel to stay logged in.
                </p>
                <div className="flex justify-end space-x-4">
                  <button
                    onClick={cancelLogout}
                    className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={performLogout}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500"
                  >
                    Logout Now
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SettingsMenu; 