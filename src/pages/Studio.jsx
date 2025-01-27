import React, { useState, useRef } from 'react';
import DashboardNav from '../components/Navigation/DashboardNav';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Studio = () => {
  const [audioFiles, setAudioFiles] = useState([]);
  const [lyrics, setLyrics] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [aiCredits, setAiCredits] = useState(100);
  const [selectedFile, setSelectedFile] = useState(null);
  const [activeTab, setActiveTab] = useState('audio'); // 'audio' or 'lyrics' for mobile
  const fileInputRef = useRef(null);
  const [isSaving, setIsSaving] = useState(false);
  const [savedStatus, setSavedStatus] = useState('');
  
  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    const newAudioFiles = files.map(file => ({
      id: Date.now(),
      name: file.name,
      size: file.size,
      type: file.type,
      url: URL.createObjectURL(file),
      status: 'uploaded'
    }));
    setAudioFiles([...audioFiles, ...newAudioFiles]);
  };

  const handleSaveLyrics = async () => {
    if (!lyrics.trim()) return;
    
    setIsSaving(true);
    setSavedStatus('saving');
    
    try {
<<<<<<< HEAD
      const response = await fetch('/api/lyrics/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ lyrics })
      });
      // Handle response
=======
      // Here you would implement your actual save logic
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated save
>>>>>>> 5d81684f2eaf323b206c8ddef426db40e420e845
      setSavedStatus('saved');
      setTimeout(() => setSavedStatus(''), 2000);
    } catch (error) {
      setSavedStatus('error');
    } finally {
      setIsSaving(false);
    }
  };

  const handleGenerateLyrics = async () => {
    setIsGenerating(true);
    try {
      // Here you would implement your AI lyrics generation logic
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulated API call
      setLyrics(prev => prev + "\n\nAI Generated lyrics will appear here...");
    } catch (error) {
      console.error('Failed to generate lyrics:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
<<<<<<< HEAD
    <div className="min-h-screen flex bg-black overflow-hidden">
      <DashboardNav />
      
      <div className="flex-1 flex flex-col w-full">
        {/* Header */}
        <header className="h-14 md:h-16 bg-gray-900/50 backdrop-blur-sm border-b border-gray-800 flex items-center justify-between px-3 md:px-6">
=======
    <div className="min-h-screen flex bg-black">
      <DashboardNav />
      
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 bg-gray-900/50 backdrop-blur-sm border-b border-gray-800 flex items-center justify-between px-4 md:px-6">
>>>>>>> 5d81684f2eaf323b206c8ddef426db40e420e845
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-light text-white">Studio</h1>
            {/* Mobile Tab Switcher */}
            <div className="flex md:hidden space-x-2">
              <button
                onClick={() => setActiveTab('audio')}
                className={`px-3 py-1 rounded-lg text-sm ${
                  activeTab === 'audio' 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-gray-800 text-gray-400'
                }`}
              >
                Audio
              </button>
              <button
                onClick={() => setActiveTab('lyrics')}
                className={`px-3 py-1 rounded-lg text-sm ${
                  activeTab === 'lyrics' 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-gray-800 text-gray-400'
                }`}
              >
                Lyrics
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-2 md:space-x-4">
            <div className="text-sm text-purple-400">
              <span className="font-bold">{aiCredits}</span> AI Credits
            </div>
            <button className="px-3 py-1.5 md:px-4 md:py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors text-sm md:text-base">
              Buy Credits
            </button>
          </div>
        </header>

        {/* Main Content */}
        <div className="flex-1 flex flex-col md:flex-row">
          {/* Audio Upload Section */}
          <div className={`flex-1 border-b md:border-b-0 md:border-r border-gray-800 ${
            activeTab === 'lyrics' ? 'hidden md:block' : ''
          }`}>
            <div className="p-4 md:p-6">
              <div className="mb-4 md:mb-6 flex items-center justify-between">
                <h2 className="text-lg font-medium text-white">Audio Files</h2>
                <button
                  onClick={() => fileInputRef.current.click()}
                  className="px-3 py-1.5 md:px-4 md:py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg flex items-center space-x-2 text-sm md:text-base"
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M12 4v16m8-8H4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="hidden md:inline">Upload Audio</span>
                  <span className="md:hidden">Upload</span>
                </button>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileUpload}
                  accept="audio/*"
                  className="hidden"
                  multiple
                />
              </div>

              <div className="space-y-3 md:space-y-4">
                {audioFiles.map(file => (
                  <motion.div
                    key={file.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-gray-800/50 rounded-lg p-3 md:p-4"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-3 md:space-y-0">
                      <div className="flex items-center space-x-3 md:space-x-4">
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-purple-600/20 rounded-lg flex items-center justify-center">
                          <svg className="w-5 h-5 md:w-6 md:h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <div>
                          <div className="text-sm md:text-base text-white font-medium">{file.name}</div>
                          <div className="text-xs md:text-sm text-gray-400">
                            {(file.size / 1024 / 1024).toFixed(2)} MB
                          </div>
                        </div>
                      </div>
                      <audio
                        controls
                        className="w-full md:w-64"
                        src={file.url}
                      />
                    </div>
                  </motion.div>
                ))}

                {audioFiles.length === 0 && (
                  <div className="text-center py-8 md:py-12 text-gray-400 text-sm md:text-base">
                    No audio files uploaded yet
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Lyrics Editor Section */}
          <div className={`flex-1 flex flex-col ${
            activeTab === 'audio' ? 'hidden md:flex' : ''
          }`}>
            <div className="p-4 md:p-6 flex-1 flex flex-col">
              <div className="mb-4 md:mb-6 flex items-center justify-between">
                <h2 className="text-lg font-medium text-white">Lyrics Editor</h2>
                <div className="flex items-center space-x-2 md:space-x-3">
                  <button
                    onClick={handleGenerateLyrics}
                    disabled={isGenerating}
                    className={`px-3 py-1.5 md:px-4 md:py-2 rounded-lg flex items-center space-x-2 text-sm md:text-base ${
                      isGenerating ? 'bg-gray-700 text-gray-400 cursor-not-allowed' : 'bg-purple-600 hover:bg-purple-700 text-white'
                    }`}
                  >
                    {isGenerating ? (
                      <>
                        <svg className="animate-spin h-4 w-4 md:h-5 md:w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                        </svg>
                        <span className="hidden md:inline">Generating...</span>
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="hidden md:inline">Generate (10 credits)</span>
                        <span className="md:hidden">Generate</span>
                      </>
                    )}
                  </button>
                  <button
                    onClick={handleSaveLyrics}
                    disabled={isSaving || !lyrics.trim()}
                    className={`px-3 py-1.5 md:px-4 md:py-2 rounded-lg flex items-center space-x-2 text-sm md:text-base ${
                      (isSaving || !lyrics.trim()) ? 'bg-gray-700 text-gray-400 cursor-not-allowed' : 'bg-purple-600 hover:bg-purple-700 text-white'
                    }`}
                  >
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="hidden md:inline">{isSaving ? 'Saving...' : 'Save'}</span>
                  </button>
                </div>
              </div>

              {savedStatus === 'saved' && (
                <div className="mb-4 p-2 bg-green-900/20 text-green-400 rounded-lg text-sm flex items-center justify-center">
                  Lyrics saved successfully!
                </div>
              )}
              
              {savedStatus === 'error' && (
                <div className="mb-4 p-2 bg-red-900/20 text-red-400 rounded-lg text-sm flex items-center justify-center">
                  Failed to save lyrics. Please try again.
                </div>
              )}

              <textarea
                value={lyrics}
                onChange={(e) => setLyrics(e.target.value)}
<<<<<<< HEAD
                className="flex-1 bg-gray-800/50 text-white p-3 md:p-4 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-purple-500 font-mono text-base leading-relaxed"
                style={{ 
                  minHeight: '200px',
                  WebkitOverflowScrolling: 'touch'
                }}
=======
                className="flex-1 bg-gray-800/50 text-white p-3 md:p-4 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-purple-500 font-mono text-sm md:text-base"
>>>>>>> 5d81684f2eaf323b206c8ddef426db40e420e845
                placeholder="Write or generate lyrics here..."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Studio; 