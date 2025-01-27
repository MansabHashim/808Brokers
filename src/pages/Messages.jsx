import React from 'react';
import { motion } from 'framer-motion';
import DashboardNav from '../components/Navigation/DashboardNav';

const Messages = () => {
  return (
    <div className="flex min-h-screen bg-black">
      <DashboardNav />
      
      <main className="flex-1 ml-20">
        <div className="h-full flex items-center justify-center px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-2xl"
          >
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-12 border border-gray-800 flex flex-col items-center">
              <svg 
                className="w-16 h-16 text-gray-600 mb-4" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              
              <h2 className="text-2xl font-medium text-gray-400 mb-8">Inbox Empty</h2>
              
              <button 
                className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors inline-flex items-center justify-center space-x-2"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>New Message</span>
              </button>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Messages; 