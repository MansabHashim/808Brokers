import React, { useState, useEffect } from 'react';

const WalletModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [view, setView] = useState('login'); // login, signup, forgot

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login request
    setTimeout(() => {
      setIsLoading(false);
      onClose();
    }, 1500);
  };

  const handleGoogleLogin = () => {
    setIsLoading(true);
    // Simulate Google OAuth
    setTimeout(() => {
      setIsLoading(false);
      onClose();
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        onClick={onClose}
      />
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div 
          className="bg-gray-900 rounded-xl p-6 w-full max-w-md relative border border-gray-800"
          onClick={e => e.stopPropagation()}
        >
          {isLoading ? (
            <div className="text-center space-y-4">
              <div className="loader mx-auto"></div>
              <p className="text-white text-lg">
                {view === 'login' ? 'Logging in...' : 
                 view === 'signup' ? 'Creating account...' : 
                 'Processing...'}
              </p>
            </div>
          ) : (
            <>
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {view === 'login' && (
                <>
                  <div className="text-center space-y-3 mb-6">
                    <h2 className="text-3xl font-light text-white tracking-tight">Welcome Back</h2>
                    <p className="text-gray-400 text-lg">Sign in to your account</p>
                  </div>

                  <button
                    onClick={handleGoogleLogin}
                    className="w-full py-3 px-4 bg-white hover:bg-gray-100 text-gray-900 rounded-lg font-medium mb-4 flex items-center justify-center space-x-2"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    <span>Continue with Google</span>
                  </button>

                  <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-700"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-gray-900 text-gray-400">Or continue with</span>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <input
                        type="email"
                        placeholder="Email address"
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500/50 text-white transition-colors duration-200"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="password"
                        placeholder="Password"
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500/50 text-white transition-colors duration-200"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        required
                      />
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <label className="flex items-center text-gray-400">
                        <input type="checkbox" className="mr-2" />
                        Remember me
                      </label>
                      <button 
                        type="button"
                        onClick={() => setView('forgot')}
                        className="text-purple-400 hover:text-purple-300"
                      >
                        Forgot password?
                      </button>
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 px-4 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-medium transition-colors duration-200"
                    >
                      Sign In
                    </button>
                  </form>

                  <div className="mt-6 text-center text-gray-400">
                    Don't have an account?{' '}
                    <button 
                      onClick={() => setView('signup')}
                      className="text-purple-400 hover:text-purple-300"
                    >
                      Sign up
                    </button>
                  </div>
                </>
              )}

              {view === 'signup' && (
                <>
                  <div className="text-center space-y-3 mb-6">
                    <h2 className="text-3xl font-light text-white tracking-tight">Create Account</h2>
                    <p className="text-gray-400 text-lg">Join our community</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Full name"
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500/50 text-white transition-colors duration-200"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Email address"
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500/50 text-white transition-colors duration-200"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="password"
                        placeholder="Password"
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500/50 text-white transition-colors duration-200"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 px-4 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-medium transition-colors duration-200"
                    >
                      Create Account
                    </button>
                  </form>

                  <div className="mt-6 text-center text-gray-400">
                    Already have an account?{' '}
                    <button 
                      onClick={() => setView('login')}
                      className="text-purple-400 hover:text-purple-300"
                    >
                      Sign in
                    </button>
                  </div>
                </>
              )}

              {view === 'forgot' && (
                <>
                  <div className="text-center space-y-3 mb-6">
                    <h2 className="text-3xl font-light text-white tracking-tight">Reset Password</h2>
                    <p className="text-gray-400 text-lg">We'll send you reset instructions</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <input
                        type="email"
                        placeholder="Email address"
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500/50 text-white transition-colors duration-200"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 px-4 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-medium transition-colors duration-200"
                    >
                      Send Instructions
                    </button>
                  </form>

                  <div className="mt-6 text-center text-gray-400">
                    Remember your password?{' '}
                    <button 
                      onClick={() => setView('login')}
                      className="text-purple-400 hover:text-purple-300"
                    >
                      Sign in
                    </button>
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default WalletModal; 