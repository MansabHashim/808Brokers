import React, { useState } from 'react';
import DashboardNav from '../components/Navigation/DashboardNav';
import SearchBar from '../components/SearchBar';
import ProfileIcon from '../components/ProfileIcon';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import { Link } from 'react-router-dom';
import MusicNote from '../components/MusicNote';

const Cloud = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [selectedItems, setSelectedItems] = useState([]);
  const [currentFolder, setCurrentFolder] = useState('/');
  const [uploadProgress, setUploadProgress] = useState(null);
  const [storageUsed, setStorageUsed] = useState(45.8);
  const [storageLimit, setStorageLimit] = useState(100);

  const handleDrop = (e) => {
    e.preventDefault();
    // Handle file drop implementation
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setUploadProgress(null), 1000);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.currentTarget.classList.add('bg-purple-500/10');
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.currentTarget.classList.remove('bg-purple-500/10');
  };

  return (
    <div className="min-h-screen flex bg-black">
      <DashboardNav />
      
      <div className="flex-1 flex flex-col">
        <header className="h-16 bg-gray-900/50 backdrop-blur-sm border-b border-gray-800 flex items-center justify-between px-6">
          <div className="flex-1">
            <SearchBar />
          </div>
          <div className="ml-4">
            <ProfileIcon />
          </div>
        </header>

        <PageTransition>
          <div className="flex-1 flex flex-col">
            {/* DAW Preview Section */}
            <div className="border-b border-gray-800">
              <div className="max-w-6xl mx-auto p-6">
                <div className="bg-gradient-to-br from-purple-900/20 to-black rounded-2xl p-8">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="text-center md:text-left">
                      <h2 className="text-3xl font-bold text-white mb-4">808 Broker DAW</h2>
                      <p className="text-gray-400 max-w-xl mb-6">
                        A powerful in-house Digital Audio Workstation designed specifically for beat makers and producers. 
                        Create, collaborate, and publish directly to the marketplace.
                      </p>
                      <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                        <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors flex items-center space-x-2">
                          <span>Join Waitlist</span>
                        </button>
                        <button className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors flex items-center space-x-2">
                          <span>Learn More</span>
                        </button>
                      </div>
                    </div>
                    
                    {/* DAW Preview Image/Animation */}
                    <motion.div 
                      className="relative w-full md:w-96 aspect-video bg-gray-900/50 rounded-lg overflow-hidden"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-gray-600 text-lg font-medium">
                          Preview Coming Soon
                        </div>
                      </div>
                      {/* Add subtle UI mockup elements */}
                      <div className="absolute top-0 left-0 right-0 h-8 bg-gray-800/50 flex items-center px-4">
                        <div className="flex space-x-2">
                          <div className="w-3 h-3 rounded-full bg-gray-600"></div>
                          <div className="w-3 h-3 rounded-full bg-gray-600"></div>
                          <div className="w-3 h-3 rounded-full bg-gray-600"></div>
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-900/50">
                        <div className="absolute bottom-0 left-0 right-0 h-12 flex items-center justify-center space-x-4">
                          <div className="w-12 h-1 rounded-full bg-purple-500/50"></div>
                          <div className="w-12 h-1 rounded-full bg-blue-500/50"></div>
                          <div className="w-12 h-1 rounded-full bg-green-500/50"></div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cloud Storage Section */}
            <div className="flex-1 overflow-y-auto">
              <div className="max-w-6xl mx-auto p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <h2 className="text-xl font-bold text-white">Cloud Storage</h2>
                    <div className="h-6 w-px bg-gray-700"></div>
                    <div className="flex items-center space-x-2 text-sm">
                      <div className="w-48 h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-purple-600 rounded-full"
                          style={{ width: `${(storageUsed / storageLimit) * 100}%` }}
                        />
                      </div>
                      <span className="text-gray-400">{storageUsed} GB</span>
                      <span className="text-gray-600">/</span>
                      <span className="text-gray-400">{storageLimit} GB</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    {/* View mode toggles */}
                    <div className="flex items-center space-x-2">
                      <button 
                        onClick={() => setViewMode('grid')}
                        className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-purple-600 text-white' : 'text-gray-400 hover:bg-gray-800'}`}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
                        </svg>
                      </button>
                      <button 
                        onClick={() => setViewMode('list')}
                        className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-purple-600 text-white' : 'text-gray-400 hover:bg-gray-800'}`}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path d="M4 6h16M4 12h16M4 18h16" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Upload Progress */}
                {uploadProgress !== null && (
                  <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="fixed top-4 right-4 bg-gray-900/90 backdrop-blur-sm rounded-lg p-4 shadow-xl"
                  >
                    <div className="flex items-center space-x-4">
                      <svg className="animate-spin h-5 w-5 text-purple-500" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                      </svg>
                      <div className="flex-1">
                        <div className="text-sm text-white mb-1">Uploading files...</div>
                        <div className="w-full h-1.5 bg-gray-700 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-purple-500 rounded-full transition-all duration-300"
                            style={{ width: `${uploadProgress}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Empty State */}
                {!uploadProgress && selectedItems.length === 0 && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center"
                  >
                    <div className="w-24 h-24 mb-6">
                      <MusicNote />
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2">Your Cloud Storage</h2>
                    <p className="text-gray-400 mb-8 max-w-md">
                      Drag and drop your audio files here, or use the upload button to start building your collection
                    </p>
                    <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors flex items-center space-x-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M12 4v16m8-8H4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>Upload Files</span>
                    </button>
                  </motion.div>
                )}

                {/* File Grid/List View */}
                {selectedItems.length > 0 && (
                  <motion.div 
                    className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* Grid items would go here */}
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </PageTransition>
      </div>
    </div>
  );
};

export default Cloud; 