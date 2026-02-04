"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export function Hero() {
    const sectionRef = useRef<HTMLElement>(null);
    const [mousePos, setMousePos] = useState({ x: "50%", y: "50%" });

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"],
    });
    // Reduced parallax intensity slightly to prevent overlap on small screens
    const yParallax = useTransform(scrollYProgress, [0, 1], [0, 50]);
    const opacityFade = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!sectionRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();
            setMousePos({
                x: `${e.clientX - rect.left}px`,
                y: `${e.clientY - rect.top}px`,
            });
        };
        const section = sectionRef.current;
        section?.addEventListener("mousemove", handleMouseMove);
        return () => section?.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <section
            ref={sectionRef}
            // FIX 1: 'min-h-[85vh]' instead of screen. This prevents the "too tall" feeling.
            // FIX 2: Reduced padding 'pt-24 md:pt-32' -> 'pt-28 md:pt-32'.
            className="spotlight relative w-full overflow-hidden bg-[#0B0D12] pt-32 pb-16 md:pt-32 md:pb-20 min-h-[85vh] md:min-h-[svh] flex flex-col md:justify-center"
            style={
                {
                    "--spotlight-x": mousePos.x,
                    "--spotlight-y": mousePos.y,
                } as React.CSSProperties
            }
        >
            {/* Background: Radiant Orbs (Scaled down slightly for mobile) */}
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
            >
                {/* FIX 3: Reduced gap from 'gap-12' to 'gap-8 lg:gap-16' for tighter layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">

                    {/* LEFT COLUMN: The Pitch */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-5 md:space-y-6">

                        {/* 1. Trust Pill */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-medium tracking-wide backdrop-blur-md"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            Operational in Nairobi
                        </motion.div>

                        {/* 2. Headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            // FIX 4: Scaled down mobile text slightly (4xl -> 3xl/4xl) to save vertical space
                            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight"
                        >
                            Automate your{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                                manual underwriting.
                            </span>
                        </motion.h1>

                        {/* 3. Subheadline */}
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-base sm:text-lg text-slate-400 max-w-lg leading-relaxed"
                        >
                            I build <span className="text-slate-200 font-medium">audit-proof digital systems</span> that cut policy issuance time by 80%.
                        </motion.p>

                        {/* 4. CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto pt-2"
                        >
                            <a
                                href="https://cal.com/caleb-kiune-7dcvda/technical-strategy-call"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative inline-flex items-center justify-center h-11 md:h-12 px-8 overflow-hidden rounded-lg bg-white text-slate-900 text-sm font-semibold tracking-wide transition-transform active:scale-95"
                            >
                                <span className="absolute inset-0 bg-gradient-to-r from-emerald-200/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <span className="relative flex items-center gap-2">
                                    Book Strategy Call
                                    <ArrowRight className="w-4 h-4" />
                                </span>
                            </a>

                            <a
                                href="#work"
                                className="inline-flex items-center justify-center h-11 md:h-12 px-8 rounded-lg border border-white/10 bg-white/5 text-slate-300 text-sm font-medium hover:bg-white/10 hover:text-white transition-colors active:scale-95"
                            >
                                View Work
                            </a>
                        </motion.div>

                        {/* 5. Trust Signals - Hidden on very small screens (sm:flex) to prevent overflow */}

                    </div>

                    {/* RIGHT COLUMN: Profile Photo */}
                    {/* FIX 5: Max-Height/Width constraints to stop it from forcing page grow */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative hidden md:flex flex-col items-center justify-center max-h-[400px]"
                    >
                        <div className="relative w-[280px] h-[280px] lg:w-[320px] lg:h-[320px]">
                            {/* Abstract Glow Background */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />

                            {/* Image Container */}
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

                            {/* Floating Badge */}
                            <motion.div
                                animate={{ y: [-5, 5, -5] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#0B0D12]/90 border border-white/10 backdrop-blur-md px-4 py-2 rounded-full shadow-xl whitespace-nowrap"
                            >
                                <span className="text-xs font-semibold text-emerald-400">
                                    ● Available for Q1 2026
                                </span>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}