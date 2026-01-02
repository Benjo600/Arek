import React, { useState } from 'react';
import { SearchBar } from './ui/search-bar';
import { analyzeUserRequest } from '../services/geminiService';
import { Sparkles } from 'lucide-react';

const AgentFinder: React.FC = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [aiReasoning, setAiReasoning] = useState<string>('');

  const handleSearch = async (query: string) => {
    setIsSearching(true);
    setAiReasoning("Analyzing your needs...");
    
    try {
      // 1. Get AI Analysis
      const analysis = await analyzeUserRequest(query);
      setAiReasoning(analysis.reasoning);
      
      // Note: Agent list display has been removed as per requirements.
      // This section now focuses purely on the search intent and AI feedback.

    } catch (error) {
      console.error("Search error:", error);
      setAiReasoning("We're having trouble reaching our AI concierge, please try again.");
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <section id="find-agent" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Search Header */}
        <div className="flex flex-col items-center justify-center text-center space-y-8">
           
           <h2 className="text-4xl md:text-5xl font-serif text-slate-900 tracking-tight max-w-2xl">
             Find an Agent Who <br/>
             <span className="text-brand-600 italic">Understands You.</span>
           </h2>

           <div className="w-full max-w-xl mx-auto relative z-20">
              <SearchBar 
                placeholder="Try 'Condo in Austin' or 'LGBTQ friendly agent in Miami'..." 
                onSearch={handleSearch}
              />
           </div>

           {/* AI Feedback Area */}
           <div className={`transition-all duration-500 overflow-hidden ${aiReasoning ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
              <p className="text-slate-600 bg-slate-50 px-6 py-4 rounded-xl border border-slate-100 inline-block text-sm font-medium max-w-2xl leading-relaxed shadow-sm">
                  {isSearching ? (
                      <span className="flex items-center gap-2 justify-center">
                          <span className="w-2 h-2 bg-brand-500 rounded-full animate-bounce" />
                          Consulting our AI Concierge...
                      </span>
                  ) : (
                      <span className="flex items-start gap-3 text-left">
                          <Sparkles className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
                          {aiReasoning}
                      </span>
                  )}
              </p>
           </div>
        </div>

      </div>
    </section>
  );
};

export default AgentFinder;