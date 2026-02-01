import React from 'react';
import { motion } from 'framer-motion';
import { Logo } from '../index';

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 text-gray-800 border-t border-gray-200 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center md:items-start"
          >
            <Logo width="100px" className="mb-3" />
            <p className="text-sm text-gray-600 text-center md:text-left max-w-xs">
              &copy; {new Date().getFullYear()} Tent Sewing Enterprises. <br className="hidden md:block" />
              All rights reserved.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 items-center"
          >
            {['Privacy Policy', 'Terms of Service', 'Contact'].map((link, index) => (
              <motion.a
                key={link}
                href="#"
                whileHover={{ scale: 1.05, color: '#4f46e5' }}
                className="text-gray-700 hover:text-indigo-600 transition-colors duration-300 text-sm font-medium"
              >
                {link}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
