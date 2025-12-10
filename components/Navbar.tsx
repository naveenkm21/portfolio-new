import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import { Menu, X, Terminal } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [time, setTime] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour12: false }));
    };
    
    const timer = setInterval(updateTime, 1000);
    updateTime();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timer);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-cyber-black/90 border-cyber-green/20 backdrop-blur-sm py-2' 
          : 'bg-transparent border-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Left Status Block */}
        <div className="flex items-center gap-4">
          <a href="#" className="flex items-center gap-2 group">
            <Terminal size={20} className="text-cyber-green" />
            <span className="font-bold text-xl tracking-tighter group-hover:text-cyber-green transition-colors">
              NK_SYSTEM<span className="animate-blink">_</span>
            </span>
          </a>
          <div className="hidden md:flex text-xs text-gray-500 border-l border-gray-800 pl-4 gap-4 font-mono">
            <span>IP: 127.0.0.1</span>
            <span>MEM: 64TB</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className="relative px-4 py-2 text-xs font-medium text-gray-400 hover:text-cyber-green transition-colors group uppercase tracking-widest"
            >
              <span className="text-cyber-green/50 mr-1">0{index + 1}.</span>
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-cyber-green group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        {/* Right Status Block */}
        <div className="hidden md:flex items-center gap-4 text-xs font-mono">
          <span className="text-cyber-cyan">{time}</span>
          <span className="w-2 h-2 bg-cyber-green rounded-full animate-pulse"></span>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-cyber-green hover:text-white transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-cyber-black border-b border-cyber-green/30 p-4 flex flex-col gap-2 md:hidden">
          {NAV_LINKS.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-3 border border-gray-800 hover:border-cyber-green text-gray-300 hover:text-cyber-green transition-all uppercase text-sm tracking-wider bg-white/5"
            >
              <span className="text-cyber-green mr-2">0{index + 1}.</span> {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;