import React from 'react';
import { motion } from 'framer-motion';

const Content = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* First Content Block - DAW Preview */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Advanced Beat Making Tools
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Create professional-quality beats with our state-of-the-art digital audio workstation.
              Access thousands of samples and collaborate with producers worldwide.
            </p>
            <button className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
              Join Waitlist
            </button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <div className="bg-gradient-to-br from-purple-900/20 to-black rounded-2xl p-8 border border-gray-800 text-center">
              <div className="text-4xl font-bold text-purple-500 mb-4">Coming Soon</div>
              <p className="text-gray-400">Our revolutionary DAW is in development</p>
              <div className="mt-6 animate-pulse [animation-duration:6s]">
                <svg className="w-16 h-16 mx-auto text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Second Content Block - Cloud Storage */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-transparent animate-pulse [animation-duration:6s] rounded-lg"></div>
              <div className="relative p-6 space-y-4">
                <div className="flex justify-center">
                  <motion.div
                    className="w-32 h-32 bg-purple-900/30 rounded-lg border border-purple-500/30 flex items-center justify-center"
                    animate={{
                      scale: [1, 1.05, 1],
                      borderColor: ['rgba(168, 85, 247, 0.3)', 'rgba(168, 85, 247, 0.6)', 'rgba(168, 85, 247, 0.3)']
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <svg className="w-16 h-16 text-purple-500" viewBox="0 0 38 33" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path 
                        d="M29.5 8.44c-.74-.44-1.69-.44-2.48 0l-5.06 2.93-3.43 1.95-5.06 2.93c-.74.44-1.69.44-2.48 0l-3.96-2.32c-.74-.44-1.19-1.21-1.19-2.08V7.92c0-.82.45-1.64 1.19-2.08l3.91-2.27c.74-.44 1.69-.44 2.48 0l3.91 2.27c.74.44 1.19 1.21 1.19 2.08v2.93l3.43-1.95V5.84c0-.82-.45-1.64-1.19-2.08l-7.29-4.25c-.74-.44-1.69-.44-2.48 0L4.07 3.76C3.33 4.2 2.88 5.02 2.88 5.84v8.5c0 .82.45 1.64 1.19 2.08l7.39 4.3c.74.44 1.69.44 2.48 0l5.06-2.93 3.43-1.95 5.06-2.93c.74-.44 1.69-.44 2.48 0l3.91 2.27c.74.44 1.19 1.21 1.19 2.08v3.93c0 .82-.45 1.64-1.19 2.08l-3.91 2.27c-.74.44-1.69.44-2.48 0l-3.91-2.27c-.74-.44-1.19-1.21-1.19-2.08v-2.93l-3.43 1.95v2.93c0 .82.45 1.64 1.19 2.08l7.34 4.25c.74.44 1.69.44 2.48 0l7.34-4.25c.74-.44 1.19-1.21 1.19-2.08v-8.5c0-.82-.45-1.64-1.19-2.08l-7.34-4.25z" 
                        fill="currentColor"
                      />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Earn While You Create
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Built on Polygon's blockchain technology, 808Brokers lets you earn MATIC tokens 
              through beat sales, collaborations, and community engagement. Experience 
              lightning-fast transactions with minimal fees while maintaining full ownership 
              of your music.
            </p>
            <a 
              href="https://polygon.technology/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center space-x-2 px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors group"
            >
              <span>Learn About Polygon</span>
              <svg 
                className="w-5 h-5 transform transition-transform group-hover:translate-x-1" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Content; 