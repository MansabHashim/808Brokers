import React, { useState, useRef, useEffect } from 'react';
import DashboardNav from '../components/Navigation/DashboardNav';
import SearchBar from '../components/SearchBar';
import { motion, AnimatePresence } from 'framer-motion';
import MusicNote from '../components/MusicNote';
import ProfileIcon from '../components/ProfileIcon';

const PREVIEW_TIME = 5000; // 5 seconds preview

const ForYou = () => {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [canSkip, setCanSkip] = useState(false);
  const [tracks, setTracks] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const audioRef = useRef(null);
  const skipTimerRef = useRef(null);

  // Mock track fetching
  useEffect(() => {
    const mockTracks = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      title: `Track ${i + 1}`,
      artist: `Artist ${i + 1}`,
      audio: '/audio/sample.mp3'
    }));
    setTracks(mockTracks);
    setCurrentTrack(mockTracks[0]);
  }, []);

  useEffect(() => {
    if (isPlaying) {
      // Enable skip after preview time
      skipTimerRef.current = setTimeout(() => {
        setCanSkip(true);
      }, PREVIEW_TIME);
    }

    return () => {
      if (skipTimerRef.current) {
        clearTimeout(skipTimerRef.current);
      }
    };
  }, [isPlaying, currentTrack]);

  const handleSkip = () => {
    if (!canSkip) return;
    
    const nextIndex = (currentIndex + 1) % tracks.length;
    setCurrentIndex(nextIndex);
    setCurrentTrack(tracks[nextIndex]);
    setCanSkip(false);
    setIsPlaying(true);
    
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  const handlePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="min-h-screen flex bg-black">
      <DashboardNav />
      
      <div className="flex-1 flex flex-col">
        <header className="h-16 bg-gray-900/50 backdrop-blur-sm border-b border-gray-800 flex items-center px-6">
          <div className="flex-1">
            <SearchBar />
          </div>
          <div className="ml-4">
            <ProfileIcon />
          </div>
        </header>

        <div className="flex-1 relative">
          {/* Enlarged Artwork Area */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 to-black cursor-pointer"
            onClick={handlePlay}
            whileHover="hover"
          >
            <motion.div 
              className="absolute inset-0 flex items-center justify-center"
              variants={{
                hover: { scale: 1.02, opacity: 0.8 },
                initial: { scale: 1, opacity: 0.4 }
              }}
              initial="initial"
            >
              <MusicNote className="w-4/5 h-4/5 text-gray-600" />
            </motion.div>

            {!isPlaying && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="text-white/50 text-3xl font-light">Click to Play</div>
              </motion.div>
            )}

            {/* Skip Button */}
            <motion.button
              className={`absolute right-8 top-8 px-6 py-2.5 rounded-lg backdrop-blur-sm flex items-center 
                ${canSkip 
                  ? 'bg-purple-600/90 text-white hover:bg-purple-500/90' 
                  : 'bg-black/40 text-gray-400'} 
                transition-all duration-300 border border-white/10`}
              whileHover={canSkip ? { scale: 1.05 } : {}}
              whileTap={canSkip ? { scale: 0.95 } : {}}
              onClick={(e) => {
                e.stopPropagation();
                handleSkip();
              }}
              disabled={!canSkip}
            >
              <span className="font-medium text-sm mr-2">Skip</span>
              <motion.div
                className="w-4 h-4"
                animate={canSkip ? { x: [0, 4, 0] } : {}}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.59 7.41L18.17 11H2v2h16.17l-3.59 3.59L16 18l6-6-6-6-1.41 1.41z"/>
                </svg>
              </motion.div>
            </motion.button>

            {/* Skip Timer */}
            {isPlaying && !canSkip && (
              <motion.div
                className="absolute right-8 top-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="relative">
                  <svg className="w-24 h-24 rotate-[-90deg]">
                    <circle
                      cx="48"
                      cy="48"
                      r="20"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      className="text-gray-700"
                    />
                    <motion.circle
                      cx="48"
                      cy="48"
                      r="20"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      className="text-purple-500"
                      strokeDasharray="126"
                      initial={{ strokeDashoffset: 126 }}
                      animate={{ strokeDashoffset: 0 }}
                      transition={{ duration: PREVIEW_TIME / 1000, ease: "linear" }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-white text-sm font-medium">
                    {Math.ceil((PREVIEW_TIME - (Date.now() - (skipTimerRef.current?.startTime || 0))) / 1000)}s
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>

        <audio
          ref={audioRef}
          src={currentTrack?.audio}
          onEnded={handleSkip}
        />
      </div>
    </div>
  );
};

export default ForYou; 