import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import WalletModal from '../Modal/WalletModal';
import LoginModal from '../Modal/LoginModal';

const Navigation = () => {
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Check login status on mount
  useEffect(() => {
    const checkLoginStatus = () => {
      // Replace this with your actual auth check logic
      const token = localStorage.getItem('userToken');
      setIsLoggedIn(!!token);
    };
    
    checkLoginStatus();
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm border-b border-gray-800 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo with conditional routing */}
            <Link to={isLoggedIn ? "/foryou" : "/"} className="flex items-center space-x-2">
              <svg className="h-6 w-6 text-purple-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8" cy="8" r="1.5" fill="currentColor" />
                <circle cx="16" cy="8" r="1.5" fill="currentColor" />
                <circle cx="8" cy="16" r="1.5" fill="currentColor" />
                <circle cx="16" cy="16" r="1.5" fill="currentColor" />
                <circle cx="12" cy="12" r="1.5" fill="currentColor" />
              </svg>
              <span className="text-lg font-light tracking-wider text-white">
                808<span className="font-medium">Brokers</span>
              </span>
            </Link>

            {/* Connect Button */}
            <button
              onClick={() => setIsLoginModalOpen(true)}
              className="bg-purple-900/20 text-purple-300 px-4 py-2 rounded-lg hover:bg-purple-900/30 transition-all backdrop-blur-sm font-light flex items-center space-x-2"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-2m2-4h.01M17 16h.01" />
                <rect x="12" y="8" width="9" height="7" rx="2" />
              </svg>
              <span>Connect Wallet</span>
            </button>
          </div>
        </div>
      </nav>

      <WalletModal 
        isOpen={isWalletModalOpen}
        onClose={() => setIsWalletModalOpen(false)}
      />

      <LoginModal 
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </>
  );
};

export default Navigation; 