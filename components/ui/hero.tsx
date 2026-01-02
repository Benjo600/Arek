import React from "react"
import { motion } from "framer-motion"
import { ButtonColorful } from "./button-colorful"

interface HeroProps {
  title: string
  subtitle: string
  ctaLabel?: string
  ctaHref?: string
}

export function Hero({
  title,
  subtitle,
  ctaLabel = "Find an Agent",
  ctaHref = "#find-agent",
}: HeroProps) {
  
  const handleCtaClick = () => {
    if (ctaHref) {
      window.location.href = ctaHref;
    }
  };

  return (
    <section
      id="hero"
      className="relative mx-auto w-full pt-44 px-6 text-center md:px-8 
      min-h-[85vh] overflow-hidden 
      bg-white
      rounded-b-[4rem] border-b border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)]"
    >
      {/* Background Image Layer with Masking */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Soft overlay to ensure text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-white z-10" />
        
        <motion.img 
            initial={{ scale: 1.15, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
            alt="Modern Inclusive Living"
            className="w-full h-full object-cover object-center opacity-40 grayscale-[20%]"
            style={{ 
                maskImage: 'linear-gradient(to bottom, black 0%, rgba(0,0,0,0.8) 40%, transparent 85%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 0%, rgba(0,0,0,0.8) 40%, transparent 85%)'
            }}
        />
      </div>

      <div className="relative z-20 flex flex-col items-center max-w-4xl mx-auto mt-12">
        {/* Badge */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-purple-100 shadow-sm mb-8 hover:bg-white/80 transition-colors cursor-default"
        >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse"/>
            <span className="text-[11px] font-bold tracking-widest text-brand-800 uppercase font-sans">Est. 1999 • The Original</span>
        </motion.div>

        {/* Title */}
        <h1
          className="animate-fade-in -translate-y-4 text-balance 
          font-serif
          text-slate-900 
          py-2 text-5xl font-bold leading-[1.1] tracking-tight 
          opacity-0 sm:text-6xl md:text-7xl lg:text-8xl mb-6"
        >
          {title}
        </h1>

        {/* Subtitle */}
        <p
          className="animate-fade-in mb-12 -translate-y-4 text-balance 
          text-lg tracking-tight text-slate-600 max-w-2xl mx-auto
          opacity-0 md:text-xl font-medium leading-relaxed"
          style={{ animationDelay: "0.1s" }}
        >
          {subtitle}
        </p>

        {/* CTA */}
        {ctaLabel && (
          <div className="flex justify-center animate-fade-in opacity-0" style={{ animationDelay: "0.3s" }}>
            <ButtonColorful
              label={ctaLabel}
              onClick={handleCtaClick}
              className="h-14 px-8 text-base shadow-xl shadow-brand-500/20 hover:shadow-brand-500/30 hover:-translate-y-0.5"
            />
          </div>
        )}
      </div>

      {/* Decorative Bottom Elements - Subtle glow */}
      <div
        className="animate-fade-up relative mt-32 opacity-0 [perspective:2000px] z-10 pointer-events-none"
      >
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-gradient-to-t from-purple-100/30 to-transparent rounded-full blur-3xl" />
      </div>
    </section>
  )
}