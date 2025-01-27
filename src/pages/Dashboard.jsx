import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DashboardNav from '../components/Navigation/DashboardNav';
import SearchBar from '../components/SearchBar';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import MusicNote from '../components/MusicNote';

const Dashboard = () => {
  const [currentTrack, setCurrentTrack] = useState({
    id: 'featured',
    title: 'Summer Vibes 2024',
    artist: 'Alex Beats',
    genre: 'Trap',
    likes: 12453,
    plays: 45231,
    image: '/images/featured-beat.jpg',
    audio: '/audio/summer-vibes.mp3',
    duration: 203, // in seconds
    bpm: 140,
    key: 'Am',
  });

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const audioRef = useRef(null);
  const progressRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const { scrollY } = useScroll();

  const posts = [
    { 
      id: 1, 
      title: 'Midnight Dreams', 
      artist: 'Wave Master',
      genre: 'Lo-Fi',
      likes: 2341, 
      plays: 8923,
      // image: '/images/beat1.jpg', // Comment out to see default music note
      audio: '/audio/midnight-dreams.mp3',
      duration: 184,
      bpm: 128,
      key: 'Cm',
      description: 'Late night vibes with smooth melodies and crisp drums 🌙✨ #lofi #beats #chill'
    },
    { 
      id: 2, 
      title: 'Purple Sunset', 
      artist: 'Melody King',
      genre: 'Ambient',
      likes: 1892, 
      plays: 6734,
      image: '/images/beat2.jpg',
      audio: '/audio/purple-sunset.mp3',
      duration: 195,
      bpm: 95,
      key: 'Fm',
      description: 'Atmospheric melodies for your soul 🌅 #ambient #chill #vibes'
    },
    { 
      id: 3, 
      title: 'Urban Flow', 
      artist: 'Beat Architect',
      genre: 'Hip Hop',
      likes: 3567, 
      plays: 12893,
      // image: '/images/beat3.jpg', // Comment out to see default music note
      audio: '/audio/urban-flow.mp3',
      duration: 176,
      bpm: 90,
      key: 'Gm',
      description: 'Street-inspired beats with a modern twist 🏙️ #hiphop #beats #urban'
    },
  ];

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleProgressClick = (e) => {
    if (progressRef.current && audioRef.current) {
      const rect = progressRef.current.getBoundingClientRect();
      const percent = (e.clientX - rect.left) / rect.width;
      const newTime = percent * currentTrack.duration;
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollTop, clientHeight } = containerRef.current;
      const index = Math.floor(scrollTop / clientHeight);
      if (index !== currentIndex) {
        setCurrentIndex(index);
        setCurrentTrack(posts[index]);
      }
    }
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-b from-gray-900 to-black">
      <DashboardNav />

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 bg-gray-900/50 backdrop-blur-sm border-b border-gray-800 flex items-center justify-between px-6">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-light text-white">For You</h1>
          </div>
          <div className="flex items-center space-x-4">
            <SearchBar />
            <Link to="/profile">
              <img src="/images/avatar.jpg" alt="Profile" className="w-8 h-8 rounded-full border border-gray-700" />
            </Link>
          </div>
        </header>

        <main 
          ref={containerRef} 
          className="flex-1 overflow-y-auto snap-y snap-mandatory"
          onScroll={handleScroll}
        >
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              className="h-screen w-full snap-start relative flex items-center justify-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Background Image with Parallax */}
              <motion.div 
                className="absolute inset-0 z-0"
                style={{
                  y: useTransform(
                    scrollY,
                    [(index - 1) * window.innerHeight, (index + 1) * window.innerHeight],
                    ['-20%', '20%']
                  )
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/80 to-gray-900" />
                {post.image ? (
                  <img
                    src={post.image}
                    alt=""
                    className="w-full h-full object-cover opacity-50"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-purple-900/10 to-gray-900/50" />
                )}
              </motion.div>

              {/* Content */}
              <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  {/* Album Art */}
                  <motion.div 
                    className="w-full md:w-96 aspect-square rounded-2xl overflow-hidden shadow-2xl"
                    animate={floatingAnimation}
                  >
                    {post.image ? (
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <MusicNote />
                    )}
                  </motion.div>

                  {/* Player Info */}
                  <div className="flex-1 flex flex-col items-start">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="mb-6"
                    >
                      <h2 className="text-4xl font-bold text-white mb-2">{post.title}</h2>
                      <p className="text-xl text-gray-400">{post.artist}</p>
                    </motion.div>

                    {/* Waveform */}
                    <motion.div 
                      className="w-full mb-6"
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {/* Waveform Progress */}
                      <div 
                        ref={progressRef}
                        className="h-24 bg-gray-800/50 rounded-lg overflow-hidden cursor-pointer mb-6"
                        onClick={handleProgressClick}
                      >
                        <div className="relative h-full">
                          <div className="absolute inset-0 flex items-center justify-center space-x-[2px]">
                            {[...Array(200)].map((_, i) => {
                              const height = 30 + Math.random() * 70;
                              const isCurrent = (i / 200) < (currentTime / post.duration);
                              return (
                                <motion.div
                                  key={i}
                                  className={`h-${height} w-1 rounded-full ${
                                    isCurrent ? 'bg-purple-500' : 'bg-gray-600/50'
                                  }`}
                                  initial={{ scaleY: 0 }}
                                  animate={{ scaleY: 1 }}
                                  transition={{ delay: i * 0.01 }}
                                />
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-gray-300 text-lg mb-4"
                    >
                      {post.description}
                    </motion.p>

                    {/* Stats */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="flex items-center space-x-6"
                    >
                      <button className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-1">
                          <svg className="h-6 w-6 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                          </svg>
                        </div>
                        <span className="text-white text-sm">{post.likes.toLocaleString()}</span>
                      </button>

                      <button className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-1">
                          <svg className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-white text-sm">{post.plays.toLocaleString()}</span>
                      </button>

                      <button className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-1">
                          <svg className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                          </svg>
                        </div>
                        <span className="text-white text-sm">Share</span>
                      </button>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Scroll Indicator */}
              <motion.div 
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <svg className="h-6 w-6 text-white/50" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M19 14l-7 7m0 0l-7-7m7 7V3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.div>
            </motion.div>
          ))}
        </main>

        <audio
          ref={audioRef}
          src={currentTrack.audio}
          onTimeUpdate={handleTimeUpdate}
          onEnded={() => setIsPlaying(false)}
        />
      </div>
    </div>
  );
};

export default Dashboard; 