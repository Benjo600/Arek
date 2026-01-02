import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1560518883-ce09059ee971?q=80&w=2073&auto=format&fit=crop" 
          alt="Happy couple moving in" 
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center mt-16">
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
          <span className="text-brand-200 font-medium tracking-wide text-sm uppercase">Est. 1999 • The Original</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
          Find Your Place <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-pink-200 to-indigo-300">
            With Pride.
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
          We connect LGBTQ+ individuals and families with over 2,000 friendly, experienced, and vetted real estate agents across the country.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#find-agent" className="w-full sm:w-auto px-8 py-4 bg-brand-600 hover:bg-brand-700 text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-brand-900/50 transform hover:scale-105">
            Find an Agent
          </a>
          <a href="#about" className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/30 rounded-xl font-semibold text-lg transition-all backdrop-blur-sm">
            How It Works
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
        <ArrowDown className="w-6 h-6" />
      </div>
    </div>
  );
};

export default Hero;
