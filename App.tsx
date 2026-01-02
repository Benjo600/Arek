import React from 'react';
import { HeroGeometric } from './components/ui/shape-landing-hero';
import { NavBar } from './components/ui/tubelight-navbar';
import Features from './components/Features';
import AgentFinder from './components/AgentFinder';
import Resources from './components/Resources';
import EnquiryForm from './components/EnquiryForm';
import Footer from './components/Footer';
import { Home, Search, Heart, BookOpen } from 'lucide-react';

const App: React.FC = () => {
  const navItems = [
    { name: 'Home', url: '#hero', icon: Home },
    { name: 'Find Agent', url: '#find-agent', icon: Search },
    { name: 'Resources', url: '#resources', icon: BookOpen },
    { name: 'Why Us', url: '#why-us', icon: Heart }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <NavBar items={navItems} />
      <main>
        <div id="hero">
          <HeroGeometric 
            title1="Find Your Place"
            title2="With Pride"
            description="Connect with over 2,000 friendly, experienced, and vetted real estate agents who understand your journey and share your values."
            ctaText="Find an Agent"
            ctaHref="#find-agent"
            backgroundImage="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
          />
        </div>
        <Features />
        <AgentFinder />
        <Resources />
        <EnquiryForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;