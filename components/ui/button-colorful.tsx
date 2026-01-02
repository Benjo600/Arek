import * as React from "react";
import { Button, ButtonProps } from "./button";
import { cn } from "../../lib/utils";
import { ArrowUpRight } from "lucide-react";

interface ButtonColorfulProps extends ButtonProps {
    label?: string;
    // Explicitly add className and onClick to ensure they are recognized by TypeScript
    className?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export function ButtonColorful({
    className,
    label = "Explore Components",
    ...props
}: ButtonColorfulProps) {
    return (
        <Button
            className={cn(
                "relative h-10 px-4 overflow-hidden",
                "bg-zinc-900 dark:bg-zinc-100",
                "transition-all duration-300 ease-out",
                "group",
                className
            )}
            {...props}
        >
            {/* Gradient background effect */}
            <div
                className={cn(
                    "absolute inset-0",
                    "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
                    "opacity-40 group-hover:opacity-90",
                    "transition-opacity duration-300 ease-out"
                )}
            />

            {/* Content */}
            <div className="relative z-10 flex items-center justify-center gap-2">
                <span className="text-white dark:text-zinc-900 font-medium tracking-wide">{label}</span>
                <ArrowUpRight className="w-4 h-4 text-white/90 dark:text-zinc-900/90 transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:translate-x-1" />
            </div>
        </Button>
    );
}