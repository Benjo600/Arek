import React from 'react';
import { Home, Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="p-1.5 rounded bg-brand-600 text-white">
                <Home className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-white">
                GayRealEstate.com
              </span>
            </div>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
              For over 25 years, we've been dedicated to ensuring the LGBTQ+ community is represented, respected, and welcomed in every real estate transaction.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-brand-400 transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-brand-400 transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-brand-400 transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-brand-400 transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">For Buyers</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-brand-400">First-Time Home Buying</a></li>
              <li><a href="#" className="hover:text-brand-400">Mortgage Calculator</a></li>
              <li><a href="#" className="hover:text-brand-400">Relocation Services</a></li>
              <li><a href="#" className="hover:text-brand-400">Buyer's Guide</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">For Sellers</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-brand-400">Free Home Valuation</a></li>
              <li><a href="#" className="hover:text-brand-400">Seller's Guide</a></li>
              <li><a href="#" className="hover:text-brand-400">Marketing Your Home</a></li>
              <li><a href="#" className="hover:text-brand-400">Find a Listing Agent</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-brand-400">About Us</a></li>
              <li><a href="#" className="hover:text-brand-400">Blog & News</a></li>
              <li><a href="#" className="hover:text-brand-400">Contact Support</a></li>
              <li><a href="#" className="hover:text-brand-400">Privacy Policy</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} GayRealEstate.com. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-red-500"></div> Fair Housing</span>
            <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-500"></div> Equal Opportunity</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;