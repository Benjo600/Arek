import React from 'react';
import { FeatureSteps } from './ui/feature-section';

const Features: React.FC = () => {
  const features = [
    {
      step: 'Step 1',
      title: "100% Free Service",
      content: "Our service is completely free for home buyers and sellers. You never pay a penny to use our platform to find an agent.",
      image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=2073&auto=format&fit=crop" // Professional handshake/service
    },
    {
      step: 'Step 2',
      title: "LGBTQ+ Friendly",
      content: "We interview every agent to ensure they share our values of equality, respect, and professionalism.",
      image: "https://images.unsplash.com/photo-1516575150278-77136aed6920?q=80&w=2067&auto=format&fit=crop" // Community with pride flag
    },
    {
      step: 'Step 3',
      title: "Community Focused",
      content: "Founded over 25 years ago, we are the original and largest LGBTQ+ real estate network.",
      image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=2069&auto=format&fit=crop" // Community gathering
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-white relative overflow-hidden">
        {/* Background blobs for premium feel */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
            <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-purple-100/40 rounded-full blur-[100px] mix-blend-multiply" />
            <div className="absolute bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-indigo-50/40 rounded-full blur-[100px] mix-blend-multiply" />
        </div>

        <div className="relative z-10">
            <div className="text-center mb-16">
                 <h2 className="text-4xl md:text-5xl font-serif text-slate-900 tracking-tight">
                    Why Choose Us
                 </h2>
            </div>
            <FeatureSteps 
                features={features}
                title="" 
                autoPlayInterval={5000}
                imageHeight="h-[400px] md:h-[500px]"
            />
        </div>
    </section>
  );
};

export default Features;