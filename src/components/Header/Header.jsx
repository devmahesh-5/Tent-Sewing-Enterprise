import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogoutBtn from './LogoutBtn';
import {Logo} from '../index.js';
function Header() {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location (path)
  const user = useSelector((state) => state.auth.userData);
  const authStatus = useSelector((state) => state.auth.status);
  const isAdmin = user?.data.role === 'admin';

  const navItems = [
    { name: 'Home', slug: '/', active: true },
    { name: 'Products', slug: '/products', active: true },
    { name: 'Achievements', slug: '/achivements', active: true },
    { name: 'Add Product', slug: '/products/create', active: isAdmin },
    { name: 'Add Achievement', slug: '/achivements/add-achivement', active: isAdmin },
    { name: 'Login', slug: '/users/login', active: !authStatus },
    { name: 'Signup', slug: '/users/signup', active: !authStatus },
  ];

  return (
    <header className="bg-[#F5F5F5] shadow-md sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-[#333333]"><Logo className='text-2xl font-bold text-blue-500'/></div>

        {/* Navigation Items */}
        <ul className="flex space-x-6">
          {navItems.map((item) =>
            item.active ? (
              <li key={item.slug}>
                <button
                  onClick={() => navigate(item.slug)}
                  className={`${
                    location.pathname === item.slug
                      ? 'text-blue-600 font-semibold'
                      : 'text-[#333333]'
                  } hover:text-blue-600 font-medium px-4 py-2 transition-all duration-300`}
                >
                  {item.name}
                </button>
              </li>
            ) : null
          )}
          {authStatus && (
            <li>
              <LogoutBtn />
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
