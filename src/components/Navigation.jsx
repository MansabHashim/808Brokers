import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({ onLoginClick }) => {
  return (
    <nav className="fixed w-full bg-black bg-opacity-80 backdrop-blur-sm z-50 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">808 Brokers</Link>
        <div className="flex items-center space-x-6">
          <Link to="/#services" className="text-white hover:text-gray-300">Services</Link>
          <Link to="/#about" className="text-white hover:text-gray-300">About</Link>
          <Link to="/#contact" className="text-white hover:text-gray-300">Contact</Link>
          <button 
            onClick={onLoginClick}
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg"
          >
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 