import React from 'react';
import { Heart, ShoppingCart, Search, Wine } from 'lucide-react';
import { navLinks } from './data/content';

const Navbar = () => {
  return (
    <nav className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Wine className="h-8 w-8" />
            <span className="text-2xl font-serif">WineSet</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link, index) => (
              <a key={index} href={link.href} className="hover:text-gray-300">
                {link.title}
              </a>
            ))}
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center bg-gray-900 rounded-full px-4 py-2">
            <Search className="h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Find drinks..."
              className="bg-transparent border-none focus:outline-none text-white px-3 placeholder-gray-400"
            />
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-6">
            <button className="hover:text-gray-300">
              <Heart className="h-6 w-6" />
            </button>
            <button className="hover:text-gray-300 relative">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </button>
            <button className="bg-red-800 text-white px-6 py-2 rounded-full hover:bg-red-900 transition-colors">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;