import React from 'react';
import { Send, Mail, CheckCircle2, Check } from 'lucide-react';
import { BackgroundBeams } from './ui/background-beams';
import { Input } from './ui/input';
import { FlipButton } from './ui/flip-button';

const EnquiryForm: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      
      {/* Background Beams */}
      <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0 opacity-30" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Header Section */}
        <div className="mb-12 space-y-6">
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 leading-[1.15] tracking-tight">
            Start Your Journey <br/>
            <span className="text-brand-600 italic">With Confidence.</span>
          </h2>
          
          <p className="text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto">
            Connect with our network of experienced, LGBTQ+ friendly real estate professionals who understand your unique needs and values.
          </p>

          {/* Horizontal Benefits - Centered */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 pt-4">
             {[
                "100% Free Service",
                "Vetted Agents",
                "Safe & Inclusive"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-slate-800 font-medium text-sm md:text-base">
                  <div className="w-5 h-5 rounded-full bg-brand-100 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3 h-3 text-brand-600" />
                  </div>
                  {item}
                </div>
              ))}
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-[0_8px_40px_rgb(0,0,0,0.08)] border border-white/40 p-8 md:p-12 relative overflow-hidden text-left mx-auto max-w-3xl">
           
           {/* Subtle decorative gradient inside card */}
           <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl pointer-events-none"></div>
           <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

           <form className="relative z-10 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-900">First Name</label>
                    <Input type="text" className="h-12 bg-white/50 border-slate-200 focus:ring-brand-500/20 focus:border-brand-500 transition-all" placeholder="e.g. Alex" />
                 </div>
                 <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-900">Last Name</label>
                    <Input type="text" className="h-12 bg-white/50 border-slate-200 focus:ring-brand-500/20 focus:border-brand-500 transition-all" placeholder="e.g. Morgan" />
                 </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-900">Email Address</label>
                    <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <Input type="email" className="pl-11 h-12 bg-white/50 border-slate-200 focus:ring-brand-500/20 focus:border-brand-500 transition-all" placeholder="alex@example.com" />
                    </div>
                 </div>
                 <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-900">Interest</label>
                    <div className="relative">
                        <select className="flex h-12 w-full items-center justify-between rounded-md border border-slate-200 bg-white/50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none cursor-pointer pl-4 pr-10 text-slate-600 transition-all">
                            <option>Buying a Home</option>
                            <option>Selling a Home</option>
                            <option>Buying & Selling</option>
                            <option>Relocation</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                        </div>
                    </div>
                 </div>
              </div>

              <div className="space-y-2">
                 <label className="text-sm font-semibold text-slate-900">How can we help?</label>
                 <textarea rows={4} className="flex min-h-[100px] w-full rounded-md border border-slate-200 bg-white/50 px-3 py-2 text-sm ring-offset-background placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/20 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none p-4 transition-all" placeholder="Tell us about your ideal home, preferred neighborhoods, or any questions you have..."></textarea>
              </div>

              <div className="mt-4">
                <FlipButton 
                  text2={
                    <span className="flex items-center gap-2">
                      Connect with an Agent <Send className="w-4 h-4" />
                    </span>
                  }
                  text1={
                    <span className="flex items-center gap-2">
                      Request Sent! <Check className="w-5 h-5" />
                    </span>
                  }
                  className="w-full"
                />
              </div>
              
              <p className="text-center text-xs text-slate-400 mt-6">
                 We respect your privacy. Your information is only shared with your matched agent.
              </p>
           </form>
        </div>

        {/* Social Proof Below - Subtle */}
        <div className="mt-12 flex justify-center items-center gap-6 opacity-80 grayscale-[20%] hover:grayscale-0 transition-all">
           <div className="flex -space-x-3">
              {[1,2,3].map((i) => (
                 <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden shadow-sm">
                    <img src={`https://randomuser.me/api/portraits/men/${30+i}.jpg`} alt="User" className="w-full h-full object-cover" />
                 </div>
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-white bg-brand-50 flex items-center justify-center text-xs font-bold text-brand-600 shadow-sm">
                 2k+
              </div>
           </div>
           <div className="text-left">
              <div className="flex text-amber-400 text-sm">★★★★★</div>
              <p className="text-xs text-slate-500 font-medium">Trusted by community members nationwide</p>
           </div>
        </div>

      </div>
    </section>
  );
};

export default EnquiryForm;