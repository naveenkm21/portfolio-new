import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 flex justify-center transition-all duration-500 ${
        isScrolled ? 'pt-4' : 'pt-6'
      }`}
    >
      <div
        className={`
          relative flex items-center justify-between px-6 transition-all duration-500
          ${isScrolled 
            ? 'w-[90%] md:w-[70%] lg:w-[50%] py-3 bg-deep-space/80 backdrop-blur-md rounded-full border border-white/10 shadow-[0_0_20px_rgba(0,243,255,0.15)]' 
            : 'w-full max-w-7xl py-4 bg-transparent'
          }
        `}
      >
        {/* Logo */}
        <a href="#" className="text-2xl font-bold font-mono tracking-tighter group flex items-center gap-1">
          <span className="w-3 h-3 rounded-full bg-neon-blue animate-pulse mr-2"></span>
          <span className="text-white group-hover:text-neon-blue transition-colors">Naveen</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors rounded-full group overflow-hidden"
            >
              <span className="relative z-10">{link.name}</span>
              <span className="absolute inset-0 bg-white/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
            </a>
          ))}
        </div>

        {/* Call to Action (Desktop) */}
        <a 
          href="#contact"
          className={`hidden md:block px-5 py-2 text-sm font-bold text-black bg-neon-blue rounded-full hover:bg-white transition-colors duration-300 hover:shadow-[0_0_15px_rgba(0,243,255,0.5)] ${!isScrolled && 'hidden'}`}
        >
          Hire Me
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-1 hover:text-neon-blue transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="absolute top-24 left-4 right-4 p-6 rounded-2xl glass-card md:hidden flex flex-col space-y-4 z-40 border border-white/10 bg-deep-space/95"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-gray-200 hover:text-neon-blue block p-3 rounded-lg hover:bg-white/5 transition-colors border-b border-white/5 last:border-none"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;