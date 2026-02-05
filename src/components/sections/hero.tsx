"use client";

import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useCallback } from "react";
import { FADE_UP_VARIANTS, STAGGER_CONTAINER_VARIANTS } from "@/lib/motion";

// Memoized animation constants for floating badge
const FLOAT_ANIMATION = { y: [-5, 5, -5] };
const FLOAT_TRANSITION = { duration: 4, repeat: Infinity, ease: "easeInOut" as const };

export function Hero() {
    const sectionRef = useRef<HTMLElement>(null);
    const rafId = useRef<number>(0);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"],
    });

    const yParallax = useTransform(scrollYProgress, [0, 1], [0, 50]);
    const opacityFade = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    // Performance-optimized mousemove: rAF throttled + direct DOM update
    const handleMouseMove = useCallback((e: MouseEvent) => {
        cancelAnimationFrame(rafId.current);

        rafId.current = requestAnimationFrame(() => {
            const section = sectionRef.current;
            if (!section) return;

            const rect = section.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Direct DOM update bypasses React reconciliation
            section.style.setProperty("--spotlight-x", `${x}px`);
            section.style.setProperty("--spotlight-y", `${y}px`);
        });
    }, []);

    useEffect(() => {
        const section = sectionRef.current;
        section?.addEventListener("mousemove", handleMouseMove, { passive: true });
        return () => {
            section?.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(rafId.current);
        };
    }, [handleMouseMove]);

    return (
        <section
            ref={sectionRef}
            className="spotlight relative w-full overflow-hidden bg-page pt-28 pb-16 min-h-screen flex flex-col justify-center md:pt-28 md:pb-20"
        >
            <motion.div
                style={{ y: yParallax }}
                className="absolute top-[-10%] right-[-10%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full bg-primary/20 blur-[100px] pointer-events-none"
            />
            <motion.div
                style={{ y: yParallax }}
                className="absolute bottom-[-10%] left-[-10%] w-[250px] h-[250px] md:w-[500px] md:h-[500px] rounded-full bg-indigo-500/10 blur-[80px] pointer-events-none"
            />

            <motion.div
                style={{ opacity: opacityFade }}
                className="container mx-auto px-6 max-w-7xl relative z-10"
                variants={STAGGER_CONTAINER_VARIANTS}
                initial="hidden"
                animate="visible"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">

                    {/* LEFT COLUMN: The Pitch */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-8 md:space-y-6">
                        <motion.h1
                            variants={FADE_UP_VARIANTS}
                            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight"
                        >
                            Automate your{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">
                                Complex Business Workflows
                            </span>
                        </motion.h1>

                        <motion.p
                            variants={FADE_UP_VARIANTS}
                            className="text-base sm:text-lg text-slate-400 max-w-lg leading-relaxed"
                        >
                            I build reliable,<span className="text-slate-200 font-medium"> data-driven web applications</span> that streamline operations and cut manual processing time.
                        </motion.p>

                        <motion.div
                            variants={FADE_UP_VARIANTS}
                            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2"
                        >
                            <a
                                href="https://wa.me/254705774171?text=Hi%20Caleb,%20I%20checked%20out%20your%20portfolio."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative inline-flex items-center justify-center h-12 px-8 overflow-hidden rounded-button bg-whatsapp hover:bg-whatsapp/90 text-white text-sm font-semibold tracking-wide transition-all shadow-lg shadow-emerald-900/20 active:scale-95 border-none"
                            >
                                <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <span className="relative flex items-center gap-2">
                                    Chat on WhatsApp
                                    <FaWhatsapp className="w-5 h-5" />
                                </span>
                            </a>

                            <a
                                href="#work"
                                className="inline-flex items-center justify-center h-12 px-8 rounded-button border border-white/10 bg-white/5 text-slate-300 text-sm font-medium hover:bg-white/10 hover:text-white transition-colors active:scale-95"
                            >
                                View Work
                            </a>
                        </motion.div>
                    </div>

                    {/* RIGHT COLUMN: Profile Photo */}
                    <motion.div
                        variants={FADE_UP_VARIANTS}
                        className="relative hidden md:flex flex-col items-center justify-center max-h-[400px]"
                    >
                        <div className="relative w-[280px] h-[280px] lg:w-[320px] lg:h-[320px]">
                            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
                            <div className="relative w-full h-full rounded-full border border-white/10 overflow-hidden shadow-2xl shadow-emerald-900/20">
                                <Image
                                    src="/caleb-kiune.jpg"
                                    alt="Caleb Kiune"
                                    fill
                                    className="object-cover"
                                    priority
                                    sizes="(max-width: 1024px) 280px, 320px"
                                />
                            </div>

                            <motion.div
                                animate={FLOAT_ANIMATION}
                                transition={FLOAT_TRANSITION}
                                className="absolute -bottom-4 left-1/2 -translate-x-1/2 translate-x-4 bg-black/40 border border-white/10 backdrop-blur-md px-4 py-1.5 rounded-full shadow-lg flex items-center gap-2 whitespace-nowrap z-20 hover:border-primary/20 transition-colors"
                                aria-label="Open for new projects"
                                role="status"
                            >
                                {/* Pinging Pulse Logic */}
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                </span>

                                <span className="text-xs font-mono font-medium tracking-wide text-primary uppercase">
                                    Open for Projects
                                </span>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}