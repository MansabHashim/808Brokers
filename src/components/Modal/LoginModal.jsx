import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      // Immediately redirect to dashboard when modal opens
      navigate('/dashboard');
      onClose();
    }
  }, [isOpen, navigate, onClose]);

  return null; // No need to render anything since we're redirecting immediately
};

export default LoginModal; 