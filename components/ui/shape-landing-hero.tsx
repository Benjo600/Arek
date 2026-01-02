"use client";

import { motion } from "framer-motion";
import { Circle, ArrowRight } from "lucide-react";
import { cn } from "../../lib/utils";
import { NeonButton } from "./neon-button";

interface HeroGeometricProps {
    badge?: string;
    title1?: string;
    title2?: string;
    description?: string;
    ctaText?: string;
    ctaHref?: string;
    backgroundImage?: string;
}

function HeroGeometric({
    badge = "",
    title1 = "Find Your Place",
    title2 = "With Pride",
    description = "Connect with over 2,000 friendly, experienced, and vetted real estate agents who understand your journey and share your values.",
    ctaText = "Find an Agent",
    ctaHref = "#find-agent",
    backgroundImage = "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
}: HeroGeometricProps) {
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.5 + i * 0.2,
                ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
            },
        }),
    };

    return (
        <div className="relative min-h-[115vh] w-full flex items-center justify-center overflow-hidden bg-[#030303]">
            
            {/* Background Image Layer */}
            {backgroundImage && (
                <div className="absolute inset-0 z-0">
                    {/* Base overlay for general dimming, lighter than before */}
                    <div className="absolute inset-0 bg-black/30 z-10" /> 
                    
                    {/* Gradient overlay to ensure text readability and bottom blending */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/90 z-10" />
                    
                    {/* Radial gradient behind text area for extra readability without darkening everything */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.4)_0%,rgba(0,0,0,0.8)_100%)] z-10" />

                    <img 
                        src={backgroundImage} 
                        alt="Background" 
                        className="w-full h-full object-cover"
                    />
                </div>
            )}

            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl z-10" />

            <div className="relative z-50 container mx-auto px-4 md:px-6 pt-32">
                <div className="max-w-3xl mx-auto text-center">
                    {badge && (
                        <motion.div
                            custom={0}
                            variants={fadeUpVariants}
                            initial="hidden"
                            animate="visible"
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 md:mb-12 backdrop-blur-sm"
                        >
                            <Circle className="h-2 w-2 fill-rose-500/80" />
                            <span className="text-sm text-white/80 tracking-wide">
                                {badge}
                            </span>
                        </motion.div>
                    )}

                    <motion.div
                        custom={1}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tight drop-shadow-2xl">
                            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/90 filter drop-shadow-lg">
                                {title1}
                            </span>
                            <br />
                            {title2 && title2.includes("Pride") ? (
                                <>
                                    <span className={cn("bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 via-white to-rose-200")}>
                                        {title2.split("Pride")[0]}
                                    </span>
                                    <span className="bg-clip-text text-transparent bg-[linear-gradient(to_right,#ef4444,#f97316,#eab308,#22c55e,#3b82f6,#a855f7,#ec4899)] animate-rainbow bg-[length:200%_auto]">
                                        Pride
                                    </span>
                                    <span className={cn("bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 via-white to-rose-200")}>
                                        {title2.split("Pride")[1]}
                                    </span>
                                </>
                            ) : (
                                <span
                                    className={cn(
                                        "bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 via-white to-rose-200"
                                    )}
                                >
                                    {title2}
                                </span>
                            )}
                        </h1>
                    </motion.div>

                    <motion.div
                        custom={2}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4 drop-shadow-md">
                            {description}
                        </p>
                    </motion.div>

                    <motion.div
                        custom={3}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <NeonButton
                            variant="solid"
                            size="lg"
                            neon={true}
                            onClick={() => { if (ctaHref) window.location.href = ctaHref }}
                            className="w-full sm:w-auto min-w-[180px]"
                        >
                            {ctaText}
                            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </NeonButton>
                        
                        <NeonButton 
                            variant="ghost"
                            size="lg"
                            neon={false}
                            onClick={() => window.location.href = "#why-us"}
                             className="w-full sm:w-auto min-w-[180px]"
                        >
                            How It Works
                        </NeonButton>
                    </motion.div>
                </div>
            </div>

            {/* Subtle bottom gradient to blend into the next section */}
            <div className="absolute bottom-0 left-0 w-full h-[0.35rem] bg-gradient-to-t from-white to-transparent pointer-events-none z-40" />
        </div>
    );
}

export { HeroGeometric }