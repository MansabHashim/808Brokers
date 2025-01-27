import React from 'react';
import { Link } from 'react-router-dom';

const ProfileIcon = ({ imageUrl }) => {
  return (
    <Link to="/profile">
      <div className="w-10 h-10 rounded-full border border-gray-700 overflow-hidden bg-gray-800 hover:border-purple-500 transition-colors">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
        )}
      </div>
    </Link>
  );
};

export default ProfileIcon; 