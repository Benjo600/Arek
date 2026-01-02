import React from 'react'
import { cn } from '../../lib/utils'
import { VariantProps, cva } from "class-variance-authority";

const buttonVariants = cva(
    "relative group border text-foreground mx-auto text-center rounded-full outline-none focus:outline-none cursor-pointer overflow-hidden",
    {
        variants: {
            variant: {
                default: "bg-brand-500/10 hover:bg-brand-500/20 border-brand-500/20 text-brand-100",
                solid: "bg-brand-600 hover:bg-brand-700 text-white border-transparent hover:border-white/20 transition-all duration-200 shadow-[0_0_20px_-5px_rgba(124,58,237,0.5)]",
                ghost: "border-white/10 bg-white/5 hover:bg-white/10 text-white hover:border-white/20",
            },
            size: {
                default: "px-8 py-3 text-base font-medium",
                sm: "px-4 py-1 text-sm",
                lg: "px-10 py-4 text-lg font-semibold",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> { neon?: boolean }

const NeonButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, neon = true, size, variant, children, ...props }, ref) => {
        return (
            <button
                className={cn(buttonVariants({ variant, size }), className)}
                ref={ref}
                {...props}
            >
                <span className={cn("absolute h-px opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out inset-x-0 inset-y-0 bg-gradient-to-r w-3/4 mx-auto from-transparent dark:via-brand-500 via-brand-400 to-transparent hidden", neon && "block")} />
                <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
                <span className={cn("absolute group-hover:opacity-30 transition-all duration-500 ease-in-out inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent dark:via-brand-500 via-brand-400 to-transparent hidden", neon && "block")} />
            </button>
        );
    }
)

NeonButton.displayName = 'NeonButton';

export { NeonButton, buttonVariants };