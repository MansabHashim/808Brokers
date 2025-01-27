import React, { useState } from 'react';
import DashboardNav from '../components/Navigation/DashboardNav';
import SearchBar from '../components/SearchBar';
import ProfileIcon from '../components/ProfileIcon';
import PageTransition from '../components/PageTransition';
import { motion, AnimatePresence } from 'framer-motion';

const Shop = () => {
  const products = [
    // Drum Kits
    {
      id: 1,
      name: "808 Essentials Vol. 1",
      price: 0.15,
      type: 'drum',
      icon: (
        <svg className="w-24 h-24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          {/* Boombox with Lightning */}
          <rect x="2" y="6" width="20" height="12" rx="2"/>
          <circle cx="7" cy="12" r="3"/>
          <circle cx="17" cy="12" r="3"/>
          <path d="M11 8h2M11 16h2"/>
          <path d="M7 12a1 1 0 100-2 1 1 0 000 2z" fill="currentColor"/>
          <path d="M17 12a1 1 0 100-2 1 1 0 000 2z" fill="currentColor"/>
          <motion.path
            d="M12 4L10 8h4l-2 4"
            stroke="currentColor"
            strokeWidth="2"
            animate={{ 
              pathLength: [0, 1, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 0.5
            }}
          />
        </svg>
      )
    },
    {
      id: 2,
      name: "Dark Trap Kit",
      price: 0.12,
      type: 'drum',
      icon: (
        <svg className="w-24 h-24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          {/* Skull with Headphones */}
          <path d="M12 4c-4 0-7 3-7 7v3h2v-3a5 5 0 0110 0v3h2v-3c0-4-3-7-7-7z"/>
          <path d="M8 14v4a2 2 0 002 2h8a2 2 0 002-2v-4"/>
          <circle cx="9" cy="12" r="1" fill="currentColor"/>
          <circle cx="15" cy="12" r="1" fill="currentColor"/>
          <motion.path
            d="M4 14l3-3M20 14l-3-3"
            strokeWidth="2"
            animate={{ 
              pathLength: [0, 1, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatDelay: 1
            }}
          />
        </svg>
      )
    },
    {
      id: 3,
      name: "Lo-Fi Dreams",
      price: 0.10,
      type: 'drum',
      icon: (
        <svg className="w-24 h-24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          {/* Cassette Tape with Lightning */}
          <rect x="2" y="6" width="20" height="12" rx="2"/>
          <circle cx="8" cy="12" r="2"/>
          <circle cx="16" cy="12" r="2"/>
          <path d="M8 12h8" strokeDasharray="2 2"/>
          <motion.path
            d="M2 12l4-4M22 12l-4-4"
            strokeWidth="2"
            animate={{ 
              pathLength: [0, 1, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              repeatDelay: 0.8
            }}
          />
        </svg>
      )
    },
    // Synth Packs with lightning effects
    {
      id: 4,
      name: "Analog Synth Pack",
      price: 0.18,
      type: 'synth',
      icon: (props) => (
        <motion.div className="relative w-24 h-24">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            {/* Synthesizer with Lightning */}
            <rect x="2" y="4" width="20" height="16" rx="2"/>
            <path d="M4 8h16M4 12h16"/>
            {Array.from({ length: 4 }).map((_, i) => (
              <motion.path
                key={i}
                d={`M${6 + i * 4} 16l2-2 2 2`}
                strokeWidth="2"
                animate={{ 
                  pathLength: [0, 1, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.2,
                  repeat: Infinity,
                  repeatDelay: 1
                }}
              />
            ))}
          </svg>
        </motion.div>
      )
    },
    {
      id: 5,
      name: "Future Bass Essentials",
      price: 0.15,
      type: 'synth',
      icon: (props) => (
        <motion.div className="relative w-24 h-24">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            {/* Futuristic Waveform */}
            <path d="M2 12c2-3 4-4 6-4s4 2 6 4 4 4 6 4 2-1 2-4"/>
            {Array.from({ length: 3 }).map((_, i) => (
              <motion.path
                key={i}
                d={`M${4 + i * 8} 6l2 12`}
                strokeWidth="2"
                animate={{ 
                  pathLength: [0, 1, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 1,
                  delay: i * 0.3,
                  repeat: Infinity,
                  repeatDelay: 0.5
                }}
              />
            ))}
          </svg>
        </motion.div>
      )
    },
    {
      id: 6,
      name: "Retro Wave Synths",
      price: 0.16,
      type: 'synth',
      icon: (props) => (
        <motion.div className="relative w-24 h-24">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            {/* Retro Gaming Console */}
            <rect x="4" y="6" width="16" height="12" rx="1"/>
            <rect x="6" y="8" width="12" height="8" rx="1"/>
            <path d="M8 12h2M14 12h2M12 10v2"/>
            {Array.from({ length: 4 }).map((_, i) => (
              <motion.path
                key={i}
                d={`M${6 + i * 4} 18l1-2`}
                strokeWidth="2"
                animate={{ 
                  pathLength: [0, 1, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.15,
                  repeat: Infinity,
                  repeatDelay: 0.8
                }}
              />
            ))}
          </svg>
        </motion.div>
      )
    }
  ];

  const ProductCard = ({ product }) => {
    const [isHovered, setIsHovered] = useState(false);
    const Icon = product.icon;

    const standardTransition = {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    };

    return (
      <motion.div
        className="relative w-full aspect-square rounded-xl overflow-hidden"
        whileHover={{ scale: 1.02 }}
        transition={standardTransition}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {/* Background with Coming Soon */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-black flex flex-col items-center justify-center p-6">
          {/* Icon */}
          <motion.div 
            className="text-gray-600 mb-12"
            animate={{ 
              scale: [1, 1.05, 1],
              opacity: [0.3, 0.4, 0.3]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {typeof Icon === 'function' ? <Icon /> : Icon}
          </motion.div>

          {/* Coming Soon Text */}
          <div className="text-center relative">
            <motion.div
              className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 tracking-wider uppercase mb-3 font-cinematic"
              style={{ 
                textShadow: '0 0 20px rgba(139, 92, 246, 0.5)',
                fontFamily: '"Orbitron", sans-serif'
              }}
              animate={{ 
                opacity: [0.7, 1, 0.7],
                scale: [0.98, 1.02, 0.98],
                textShadow: [
                  '0 0 20px rgba(139, 92, 246, 0.3)',
                  '0 0 30px rgba(139, 92, 246, 0.6)',
                  '0 0 20px rgba(139, 92, 246, 0.3)'
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Coming Soon
            </motion.div>
            <motion.div 
              className="text-gray-400 text-sm md:text-base tracking-widest uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {product.releaseDate || 'Join the Waitlist'}
            </motion.div>
          </div>

          {/* Decorative Elements */}
          <motion.div 
            className="absolute inset-0 border border-purple-500/20 rounded-xl"
            animate={{ 
              opacity: [0.2, 0.4, 0.2],
              scale: [1, 1.02, 1]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Info Overlay */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={standardTransition}
              className="absolute inset-0 flex flex-col justify-end p-6 bg-black/80 backdrop-blur-sm"
            >
              <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-purple-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
                <span className="text-xl font-bold text-purple-400">
                  {product.price} MATIC
                </span>
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
          <div className="flex-1">
            <SearchBar placeholder="Search sounds..." />
          </div>
          <div className="ml-4">
            <ProfileIcon />
          </div>
        </header>

        <PageTransition>
          <main className="flex-1 overflow-y-auto p-6">
            <div className="max-w-6xl mx-auto space-y-12">
              {/* Drum Kits Section */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-6">Drum Kits</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {products.filter(p => p.type === 'drum').map(kit => (
                    <ProductCard key={kit.id} product={kit} />
                  ))}
                </div>
              </section>

              {/* Synth Packs Section */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-6">Synth Packs</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {products.filter(p => p.type === 'synth').map(kit => (
                    <ProductCard key={kit.id} product={kit} />
                  ))}
                </div>
              </section>
            </div>
          </main>
        </PageTransition>
      </div>
    </div>
  );
};

export default Shop; 