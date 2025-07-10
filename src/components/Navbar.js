import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Gamepad2, Upload, Users, Home, Trophy, 
  Zap, User, LogOut, Settings, Bell, Search 
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/games', label: 'Games', icon: Gamepad2 },
    { path: '/tournaments', label: 'Tournaments', icon: Trophy },
    { path: '/community', label: 'Community', icon: Users },
    { path: '/leaderboard', label: 'Leaderboard', icon: Zap },
  ];

  const userMenuItems = [
    { path: '/profile', label: 'Profile', icon: User },
    { path: '/submit-game', label: 'Submit Game', icon: Upload },
    { path: '/settings', label: 'Settings', icon: Settings },
  ];

  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    logout();
    setShowUserMenu(false);
    navigate('/');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div 
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/25"
            >
              <Gamepad2 className="w-6 h-6 text-white" />
            </motion.div>
            <span className="text-xl font-bold gradient-text font-orbitron hidden sm:block">
              AfriGameHub
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 flex items-center space-x-2 group font-space ${
                  isActive(path)
                    ? 'text-cyan-400 bg-cyan-400/10 shadow-lg shadow-cyan-400/20'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{label}</span>
                {isActive(path) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-cyan-500/10 rounded-xl border border-cyan-500/20"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-3">
            {/* Search */}
            <button className="p-2 text-gray-400 hover:text-white transition-colors rounded-xl hover:bg-white/5 focus-ring">
              <Search className="w-5 h-5" />
            </button>

            {/* Notifications */}
            {user && (
              <button className="relative p-2 text-gray-400 hover:text-white transition-colors rounded-xl hover:bg-white/5 focus-ring">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
              </button>
            )}

            {/* User Menu or Auth Buttons */}
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center space-x-2 p-2 rounded-xl hover:bg-white/5 transition-colors focus-ring"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full p-0.5 shadow-lg shadow-cyan-500/25">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <span className="hidden sm:block text-white font-medium font-space">{user.name}</span>
                </button>

                <AnimatePresence>
                  {showUserMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      className="absolute right-0 mt-2 w-48 glass-effect-strong rounded-xl border border-slate-700/50 py-2 shadow-2xl shadow-cyan-500/10"
                    >
                      {userMenuItems.map(({ path, label, icon: Icon }) => (
                        <Link
                          key={path}
                          to={path}
                          onClick={() => setShowUserMenu(false)}
                          className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white hover:bg-white/5 transition-colors font-space"
                        >
                          <Icon className="w-4 h-4" />
                          <span>{label}</span>
                        </Link>
                      ))}
                      <hr className="my-2 border-gray-700" />
                      <button
                        onClick={handleLogout}
                        className="flex items-center space-x-2 px-4 py-2 text-red-400 hover:text-red-300 hover:bg-white/5 transition-colors w-full text-left font-space"
                      >
                        <LogOut className="w-4 h-4" />
                        <span>Logout</span>
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <div className="hidden md:flex items-center space-x-3">
                <Link
                  to="/login"
                  className="px-4 py-2 text-gray-300 hover:text-white transition-colors rounded-xl hover:bg-white/5 font-space font-medium"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="btn-primary px-6 py-2 rounded-xl font-medium font-space"
                >
                  Sign Up
                </Link>
              </div>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-colors focus-ring"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-effect border-t border-slate-700/50"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map(({ path, label, icon: Icon }) => (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 font-space ${
                    isActive(path)
                      ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shadow-lg shadow-cyan-400/10'
                      : 'text-gray-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{label}</span>
                </Link>
              ))}
              
              {!user && (
                <div className="pt-4 border-t border-gray-700 space-y-2">
                  <Link
                    to="/login"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center px-4 py-3 text-gray-300 hover:text-white transition-colors rounded-xl hover:bg-white/5 font-space font-medium"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center px-4 py-3 btn-primary rounded-xl font-medium font-space"
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;