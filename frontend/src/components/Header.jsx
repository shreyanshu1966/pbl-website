import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const userMenuRef = useRef(null);
  
  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Events', href: '/events' },
    { name: 'Resources', href: '/resources' },
    { name: 'Management Team', href: '/contact' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleUserMenu = () => setIsUserMenuOpen(!isUserMenuOpen);

  // Close user menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    logout();
    setIsUserMenuOpen(false);
    navigate('/');
  };

  const getUserInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const getRoleColor = (role) => {
    const colors = {
      'student': 'bg-blue-500',
      'mentor': 'bg-green-500',
      'evaluator': 'bg-purple-500',
      'admin': 'bg-red-500',
      'default': 'bg-gray-500'
    };
    return colors[role] || colors.default;
  };

  const isActiveRoute = (href) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white shadow-lg sticky top-0 z-50 border-b-2 border-purple-200"
    >
      <div className="container">
        <div className="flex items-center justify-between h-20 py-2">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img 
              src="/Screenshot 2025-06-30 164434.png" 
              alt="MIT-ADT University PBL Header" 
              className="h-16 w-auto max-w-xs object-contain transition-all duration-300 group-hover:scale-105 filter drop-shadow-md"
              onError={(e) => {
                e.target.src = "https://mituniversity.ac.in/assets_web/images/LOGO2.png";
                e.target.className = "h-16 w-auto object-contain transition-all duration-300 group-hover:scale-105";
              }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => {
              const isActive = isActiveRoute(item.href);
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-semibold transition-all duration-300 hover:scale-105 px-4 py-2 rounded-lg ${
                    isActive 
                      ? 'text-white bg-[#761b89]' 
                      : 'text-gray-700 hover:text-white hover:bg-[#761b89]'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button / User Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="relative" ref={userMenuRef}>
                <button
                  onClick={toggleUserMenu}
                  className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  <div className={`w-8 h-8 rounded-full ${getRoleColor(user.role)} flex items-center justify-center text-white text-sm font-semibold`}>
                    {getUserInitials(user.name)}
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-medium text-gray-700">{user.name}</div>
                    <div className="text-xs text-gray-500 capitalize">{user.role}</div>
                  </div>
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <AnimatePresence>
                  {isUserMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                    >
                      <Link
                        to="/dashboard"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        Dashboard
                      </Link>
                      <Link
                        to="/profile"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        Profile
                      </Link>
                      <hr className="my-1 border-gray-200" />
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors duration-200"
                      >
                        Logout
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link to="/login" className="btn btn-purple">
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button - Only visible on mobile */}
          <button
            onClick={toggleMenu}
            className="block md:!hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu - Only visible on mobile */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="block md:!hidden py-4 border-t border-gray-200"
          >
            <nav className="flex flex-col space-y-3">
              {navigationItems.map((item) => {
                const isActive = isActiveRoute(item.href);
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`font-medium px-3 py-2 rounded-md transition-colors duration-200 ${
                      isActive 
                        ? 'text-white bg-[#761b89]' 
                        : 'text-gray-700 hover:text-white hover:bg-[#761b89]'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
              
              {user ? (
                <>
                  <Link 
                    to="/dashboard" 
                    className="text-gray-700 hover:text-blue-600 font-medium px-3 py-2 rounded-md hover:bg-gray-50 transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <div className="px-3 py-2">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className={`w-6 h-6 rounded-full ${getRoleColor(user.role)} flex items-center justify-center text-white text-xs font-semibold`}>
                        {getUserInitials(user.name)}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-700">{user.name}</div>
                        <div className="text-xs text-gray-500 capitalize">{user.role}</div>
                      </div>
                    </div>
                    <button 
                      onClick={handleLogout}
                      className="w-full text-left text-red-600 hover:bg-red-50 px-2 py-1 rounded transition-colors duration-200"
                    >
                      Logout
                    </button>
                  </div>
                </>
              ) : (
                <Link 
                  to="/login" 
                  className="btn btn-purple mx-3 mt-3"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
              )}
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
