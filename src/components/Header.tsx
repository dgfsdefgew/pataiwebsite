import React, { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import DarkModeToggle from './DarkModeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/525654337869', '_blank');
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-sm border-b border-gray-800 z-50 transition-all duration-300 perspective-1000">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 transform-style-3d">
          {/* Logo */}
          <div className="flex-shrink-0 transform hover:rotateY-5 hover:translateZ-2 transition-transform duration-300">
            <h1 className="text-2xl font-bold text-cyan-400 holographic">
              Patrick Blanks AI Solutions
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 transform hover:translateZ-2 transition-transform duration-300">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-300 hover:text-cyan-400 transition-all duration-300 transform hover:translateY-1 hover:translateZ-1"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-300 hover:text-cyan-400 transition-all duration-300 transform hover:translateY-1 hover:translateZ-1"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-cyan-400 transition-all duration-300 transform hover:translateY-1 hover:translateZ-1"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-cyan-400 transition-all duration-300 transform hover:translateY-1 hover:translateZ-1"
            >
              Contact
            </button>
          </nav>

          {/* Dark Mode Toggle & WhatsApp Button */}
          <div className="hidden md:flex items-center space-x-4 transform hover:translateZ-2 transition-transform duration-300">
            <button
              onClick={openWhatsApp}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-300 transform hover:scale-110 hover:rotateX-5 hover:translateZ-2 glow-cyan"
            >
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden transform hover:rotateZ-15 hover:scale-110 transition-transform duration-300">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-cyan-400 transition-all duration-300 transform hover:translateZ-1"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800 transition-all duration-300 transform-style-3d">
          <div className="px-2 pt-2 pb-3 space-y-1 transform hover:translateZ-2 transition-transform duration-300">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-gray-900 rounded-md transition-all duration-300 transform hover:translateX-2 hover:translateZ-1"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-gray-900 rounded-md transition-all duration-300 transform hover:translateX-2 hover:translateZ-1"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-gray-900 rounded-md transition-all duration-300 transform hover:translateX-2 hover:translateZ-1"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-gray-900 rounded-md transition-all duration-300 transform hover:translateX-2 hover:translateZ-1"
            >
              Contact
            </button>
            <button
              onClick={openWhatsApp}
              className="block w-full text-left px-3 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 mt-4 transition-all duration-300 transform hover:scale-105 hover:translateZ-2 glow-cyan"
            >
              <MessageCircle className="h-4 w-4 inline mr-2" />
              WhatsApp Contact
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;