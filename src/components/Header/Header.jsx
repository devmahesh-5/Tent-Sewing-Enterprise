import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import LogoutBtn from './LogoutBtn';
import { Logo } from '../index.js';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const user = useSelector((state) => state.auth.userData);
  const authStatus = useSelector((state) => state.auth.status);
  const isAdmin = user?.data.role === 'admin';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', slug: '/', active: true },
    { name: 'Products', slug: '/products', active: true },
    { name: 'Achievements', slug: '/achivements', active: true },
    { name: 'Trek Guide', slug: '/trek-guide', active: true },
    { name: 'My Bookings', slug: '/my-bookings', active: authStatus && !isAdmin },
    { name: 'Add Product', slug: '/products/create', active: isAdmin },
    { name: 'Add Achievement', slug: '/achivements/add-achivement', active: isAdmin },
    { name: 'Admin Settings', slug: '/admin/settings', active: isAdmin },
    { name: 'View Bookings', slug: '/admin/bookings', active: isAdmin },
    { name: 'Login', slug: '/users/login', active: !authStatus },
    { name: 'Signup', slug: '/users/signup', active: !authStatus },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100"
    >
      <nav className="container mx-auto flex items-center justify-between px-4 md:px-6 py-4">
        {/* Logo */}
        <motion.div
          onClick={() => navigate('/')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="cursor-pointer"
        >
          <Logo className='text-2xl font-bold bg-gradient-to-r from-indigo-700 via-blue-600 to-purple-700 bg-clip-text text-transparent' />
        </motion.div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-1">
          {navItems.map((item) =>
            item.active ? (
              <motion.li
                key={item.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={() => navigate(item.slug)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${location.pathname === item.slug
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md'
                    : 'text-gray-700 hover:bg-indigo-50 hover:text-indigo-700'
                    }`}
                >
                  {item.name}
                </button>
              </motion.li>
            ) : null
          )}
          {authStatus && (
            <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <LogoutBtn />
            </motion.li>
          )}
        </ul>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute top-full left-0 right-0 bg-white shadow-2xl md:hidden border-t border-gray-100"
            >
              <ul className="flex flex-col p-4 space-y-2">
                {navItems.map((item) =>
                  item.active ? (
                    <li key={item.slug}>
                      <button
                        onClick={() => {
                          navigate(item.slug);
                          setMobileMenuOpen(false);
                        }}
                        className={`${location.pathname === item.slug
                          ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                          : 'text-gray-700 hover:bg-indigo-50 hover:text-indigo-700'
                          } w-full text-left px-4 py-3 rounded-lg transition-all duration-300 font-medium`}
                      >
                        {item.name}
                      </button>
                    </li>
                  ) : null
                )}
                {authStatus && (
                  <li>
                    <LogoutBtn className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white px-4 py-3 rounded-lg transition-all duration-300 font-medium text-center" />
                  </li>
                )}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}

export default Header;
