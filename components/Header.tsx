import React, { useState, useEffect } from 'react';
import { Home } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 pointer-events-none ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="absolute top-0 left-0 w-full rainbow-border opacity-0 transition-opacity duration-300" 
           style={{ opacity: isScrolled ? 1 : 0 }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center pointer-events-auto">
        
        {/* Logo */}
        <div className="flex items-center space-x-2 cursor-pointer">
          <div className={`p-2 rounded-lg ${isScrolled ? 'bg-brand-50 text-brand-600' : 'bg-white/10 text-white backdrop-blur-sm'}`}>
            <Home className="w-6 h-6" />
          </div>
          <span className={`text-xl font-bold tracking-tight ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
            GayRealEstate<span className={isScrolled ? 'text-brand-600' : 'text-brand-200'}>.com</span>
          </span>
        </div>

        {/* Desktop CTA Button (Simplified Header) */}
        <div className="hidden md:block">
          <button className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
            isScrolled 
              ? 'bg-brand-600 text-white hover:bg-brand-700 shadow-lg shadow-brand-200' 
              : 'bg-white text-brand-700 hover:bg-slate-100 shadow-lg'
          }`}>
            Agent Login
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
