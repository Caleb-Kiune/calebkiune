import { Variants } from "framer-motion";

/**
 * Global Motion Manifesto
 * Standardized animations for a consistent, premium feel.
 */

// 1. Standardized Variants: The "Audit-Proof" Reveal
export const FADE_UP_VARIANTS: Variants = {
    hidden: {
        opacity: 0,
        y: 24 // Subtle rise, not a jump
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1] // Custom "Cinematic" cubic-bezier
        }
    }
};

export const FADE_DOWN_VARIANTS: Variants = {
    hidden: {
        opacity: 0,
        y: -24
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1]
        }
    }
};

export const STAGGER_CONTAINER_VARIANTS: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15, // "Unrolling" feel
            delayChildren: 0.1,
        },
    },
};

// 2. The Viewport Strategy
export const VIEWPORT_CONFIG = {
    once: true,
    margin: "-100px", // Triggers when element is well within view
} as const;
