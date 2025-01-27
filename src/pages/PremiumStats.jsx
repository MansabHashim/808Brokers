import React, { useState } from 'react';
import DashboardNav from '../components/Navigation/DashboardNav';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

const PremiumStats = () => {
  const [isPurchasing, setIsPurchasing] = useState(false);
  const price = 0.1; // MATIC

  const handlePurchase = async () => {
    setIsPurchasing(true);
    // Implement Web3 transaction here
    try {
      // Mock purchase for now
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsPurchasing(false);
    } catch (error) {
      setIsPurchasing(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-black">
      <DashboardNav />
      
      <div className="flex-1 flex flex-col">
        <header className="h-16 bg-gray-900/50 backdrop-blur-sm border-b border-gray-800 flex items-center px-6">
          <h1 className="text-xl font-light text-white">Premium Analytics</h1>
        </header>

        <PageTransition>
          <main className="flex-1 overflow-y-auto p-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-purple-900/20 to-black rounded-2xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Unlock Premium Analytics</h2>
                <p className="text-gray-400 mb-6">
                  Get detailed insights about your audience, track your growth, and analyze your performance.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-900/50 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-white mb-4">What you'll get:</h3>
                    <ul className="space-y-3 text-gray-400">
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                        </svg>
                        Detailed follower analytics
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                        </svg>
                        Track engagement metrics
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                        </svg>
                        Audience demographics
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-900/50 rounded-xl p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">Premium Access</h3>
                      <p className="text-gray-400 mb-4">One-time payment for lifetime access</p>
                      <div className="text-3xl font-bold text-purple-400 mb-6">
                        {price} MATIC
                      </div>
                    </div>
                    <motion.button
                      className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-lg px-6 py-3 transition-colors flex items-center justify-center"
                      onClick={handlePurchase}
                      disabled={isPurchasing}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isPurchasing ? (
                        <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                        </svg>
                      ) : (
                        'Unlock Premium Analytics'
                      )}
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </PageTransition>
      </div>
    </div>
  );
};

export default PremiumStats; 