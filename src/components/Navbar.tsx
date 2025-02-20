import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Star, Menu, X } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-gradient-to-r from-amber-50 via-amber-100 to-yellow-50 shadow-lg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="relative">
                <div className="relative group">
                  <Star className="h-8 w-8 text-amber-400 animate-[spin_20s_linear_infinite] group-hover:animate-[spin_5s_linear_infinite]" />
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400/30 via-yellow-400/30 to-amber-400/30 blur-md rounded-full animate-[pulse_3s_ease-in-out_infinite]"></div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-amber-200/20 via-yellow-200/20 to-amber-200/20 blur-lg rounded-full animate-[pulse_4s_ease-in-out_infinite_1s]"></div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-amber-100/10 via-yellow-100/10 to-amber-100/10 blur-xl rounded-full animate-[pulse_5s_ease-in-out_infinite_2s]"></div>
                </div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-amber-700 via-amber-800 to-yellow-900 bg-clip-text text-transparent">
                Starlight Lab
              </span>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-amber-700 hover:text-amber-900 focus:outline-none"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                isActive('/') ? 'text-amber-700 border-b-2 border-amber-400' : 'text-gray-600 hover:text-amber-700'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                isActive('/about') ? 'text-amber-700 border-b-2 border-amber-400' : 'text-gray-600 hover:text-amber-700'
              }`}
            >
              About
            </Link>
            <Link
              to="/publications"
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                isActive('/publications') ? 'text-amber-700 border-b-2 border-amber-400' : 'text-gray-600 hover:text-amber-700'
              }`}
            >
              Publications
            </Link>
            <Link
              to="/projects"
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                isActive('/projects') ? 'text-amber-700 border-b-2 border-amber-400' : 'text-gray-600 hover:text-amber-700'
              }`}
            >
              Projects
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg z-50`}>
          <div className="px-2 pt-2 pb-3 space-y-1 animate-fade-in">
            <Link
              to="/"
              onClick={toggleMenu}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/') ? 'text-amber-700 bg-amber-50' : 'text-gray-600 hover:text-amber-700 hover:bg-amber-50'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={toggleMenu}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/about') ? 'text-amber-700 bg-amber-50' : 'text-gray-600 hover:text-amber-700 hover:bg-amber-50'
              }`}
            >
              About
            </Link>
            <Link
              to="/publications"
              onClick={toggleMenu}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/publications') ? 'text-amber-700 bg-amber-50' : 'text-gray-600 hover:text-amber-700 hover:bg-amber-50'
              }`}
            >
              Publications
            </Link>
            <Link
              to="/projects"
              onClick={toggleMenu}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/projects') ? 'text-amber-700 bg-amber-50' : 'text-gray-600 hover:text-amber-700 hover:bg-amber-50'
              }`}
            >
              Projects
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;