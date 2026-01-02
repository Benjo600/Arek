import React from 'react';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

const BLOG_POSTS = [
  {
    id: 1,
    title: "Navigating the Market: A Guide for First-Time LGBTQ+ Buyers",
    excerpt: "Buying your first home is a monumental step. Here’s how to ensure your journey is safe, inclusive, and financially smart.",
    image: "https://images.unsplash.com/photo-1626178793926-22b28830aa30?q=80&w=2070&auto=format&fit=crop",
    category: "BUYING GUIDE",
    date: "MARCH 15, 2024",
    readTime: "5 MIN READ"
  },
  {
    id: 2,
    title: "The Most Inclusive Neighborhoods to Watch in 2024",
    excerpt: "From emerging hubs to established safe havens, discover the communities where pride isn't just a month, but a lifestyle.",
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=2069&auto=format&fit=crop",
    category: "NEIGHBORHOODS",
    date: "MARCH 10, 2024",
    readTime: "4 MIN READ"
  },
  {
    id: 3,
    title: "Investment Strategies: Building Generational Wealth",
    excerpt: "Real estate remains one of the best ways to build wealth. Learn how to start your portfolio with community-focused values.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop",
    category: "INVESTMENT",
    date: "FEBRUARY 28, 2024",
    readTime: "7 MIN READ"
  }
];

const Resources: React.FC = () => {
  return (
    <section id="resources" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6 tracking-tight">
            Latest <span className="italic text-brand-600">Insights</span> & Stories
          </h2>
          <p className="text-lg text-slate-600 font-light leading-relaxed">
            Expert advice, market trends, and community stories to help you make informed real estate decisions.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article key={post.id} className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
              
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-slate-200">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors z-10" />
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-xs font-semibold uppercase tracking-wider text-brand-700 rounded-full shadow-sm">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-slate-500 mb-4 font-medium uppercase tracking-wide">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-brand-400" />
                    {post.date}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-slate-300" />
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-brand-400" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-serif font-bold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors leading-tight">
                  {post.title}
                </h3>
                
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow font-light">
                  {post.excerpt}
                </p>

                <button className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 group-hover:text-brand-700 transition-colors mt-auto">
                  Read Article
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </article>
          ))}
        </div>
        
        {/* View All Button */}
        <div className="mt-16 text-center">
             <button className="px-8 py-3 bg-white border border-slate-200 text-slate-900 font-medium rounded-full hover:bg-slate-50 transition-colors shadow-sm hover:shadow-md">
                View All Articles
             </button>
        </div>

      </div>
    </section>
  );
};

export default Resources;