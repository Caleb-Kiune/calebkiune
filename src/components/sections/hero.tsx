"use client";

import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export function Hero() {
    const sectionRef = useRef<HTMLElement>(null);
    const [mousePos, setMousePos] = useState({ x: "50%", y: "50%" });

    // Scroll-linked parallax for visual depth
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"],
    });
    const yParallax = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const opacityFade = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    // Cursor-tracking spotlight effect
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
            className="spotlight relative min-h-screen pt-24 md:pt-32 pb-16 md:pb-24 px-6 overflow-hidden flex items-center"
            style={
                {
                    "--spotlight-x": mousePos.x,
                    "--spotlight-y": mousePos.y,
                } as React.CSSProperties
            }
        >
            {/* Background: Radiant Orbs with Parallax */}
            <motion.div
                style={{ y: yParallax }}
                className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] md:w-[600px] md:h-[600px] rounded-full bg-primary/20 blur-[120px] pointer-events-none"
            />
            <motion.div
                style={{ y: yParallax }}
                className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full bg-accent/10 blur-[100px] pointer-events-none"
            />

            <motion.div
                style={{ opacity: opacityFade }}
                className="container mx-auto max-w-6xl relative z-10"
            >
                <div className="flex flex-col md:grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
                    {/* LEFT COLUMN: The Pitch */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 md:space-y-8">
                        {/* 1. Trust Pill */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-100 border border-surface-200 text-slate-300 text-xs font-medium tracking-wide"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            Operational in Nairobi
                        </motion.div>

                        {/* 2. Headline - Editorial Display Typography */}
                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="font-display text-display-sm sm:text-display-md md:text-display-lg lg:text-display-xl text-white leading-[1.05]"
                        >
                            Automate your{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-400">
                                manual underwriting.
                            </span>
                        </motion.h1>

                        {/* 3. Subheadline */}
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-md md:max-w-xl leading-relaxed"
                        >
                            I build{" "}
                            <span className="text-slate-200">
                                audit-proof digital systems
                            </span>{" "}
                            that cut policy issuance time by 80%.
                        </motion.p>

                        {/* 4. CTA Cluster - Premium Linear-style Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto"
                        >
                            {/* Primary Button - Shimmer Effect */}
                            <motion.a
                                href="https://cal.com/caleb-kiune-7dcvda/technical-strategy-call"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="group relative inline-flex items-center justify-center h-12 px-6 md:px-8 overflow-hidden rounded-lg bg-white text-[#0F1117] text-sm font-medium tracking-tight shadow-lg shadow-white/10 transition-all duration-300 hover:shadow-white/20"
                            >
                                {/* Shimmer overlay */}
                                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:translate-x-full transition-transform duration-700 ease-out" />
                                <span className="relative z-10 flex items-center gap-2">
                                    Book Strategy Call
                                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                                </span>
                            </motion.a>

                            {/* Secondary Button - Glassmorphism */}
                            <motion.a
                                href="#work"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="group inline-flex items-center justify-center h-12 px-6 md:px-8 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm text-slate-300 text-sm font-medium tracking-tight transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:text-white"
                            >
                                <span className="flex items-center gap-2">
                                    View Work
                                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                                </span>
                            </motion.a>
                        </motion.div>

                        {/* 5. Trust Signals */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="pt-2 md:pt-4 flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-6 text-xs md:text-sm text-slate-500"
                        >
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-emerald-500/80" />
                                <span>ODPC Compliant</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-emerald-500/80" />
                                <span>Next.js 15 Ready</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* RIGHT COLUMN: Profile Photo with Glow (Humanity Layer) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative hidden md:flex flex-col items-center justify-center h-[400px] lg:h-[480px] w-full"
                    >
                        {/* Glow Ring Effect */}
                        <div className="relative">
                            <div className="absolute -inset-6 bg-gradient-to-br from-primary/40 via-indigo-500/20 to-accent/20 rounded-full blur-2xl opacity-70 animate-pulse" />
                            <div className="absolute -inset-3 bg-gradient-to-tr from-primary/30 to-transparent rounded-full blur-xl" />

                            {/* Profile Photo */}
                            <div className="relative w-[260px] h-[260px] lg:w-[300px] lg:h-[300px] rounded-full overflow-hidden border-2 border-white/10 shadow-2xl shadow-primary/20">
                                <Image
                                    src="/caleb-kiune.jpg"
                                    alt="Caleb Kiune - Full-Stack Developer"
                                    fill
                                    className="object-cover"
                                    priority
                                    sizes="(max-width: 1024px) 260px, 300px"
                                />
                            </div>

                            {/* Floating Status Badge */}
                            <motion.div
                                animate={{ y: [-4, 4, -4] }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-4 py-2.5 rounded-full bg-surface-100/80 border border-white/10 backdrop-blur-md shadow-lg"
                            >
                                <span className="text-xs font-medium text-slate-300 whitespace-nowrap">
                                    ✅ Available for Q1 2026
                                </span>
                            </motion.div>
                        </div>

                        {/* Decorative Floating Elements */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            className="absolute top-10 right-10 w-16 h-16 rounded-full border border-white/5 opacity-40"
                        />
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{
                                duration: 25,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            className="absolute bottom-20 left-10 w-24 h-24 rounded-full border border-primary/10 opacity-30"
                        />
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}