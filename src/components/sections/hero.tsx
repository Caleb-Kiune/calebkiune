"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="relative min-h-screen pt-24 md:pt-32 pb-16 md:pb-24 px-6 overflow-hidden flex items-center">
            {/* Background: Radiant Orbs */}
            <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] md:w-[600px] md:h-[600px] rounded-full bg-primary/20 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full bg-accent/10 blur-[100px] pointer-events-none" />

            <div className="container mx-auto max-w-6xl relative z-10">
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

                        {/* 2. Headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white leading-[1.1]"
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
                            I build <span className="text-slate-200">audit-proof digital systems</span> that cut policy issuance time by 80%.
                        </motion.p>

                        {/* 4. CTA Cluster */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto"
                        >
                            <Button asChild size="lg" className="h-12 px-6 md:px-8 text-sm font-semibold bg-white text-slate-900 hover:bg-slate-200 rounded-md shadow-sm transition-all">
                                <Link
                                    href="https://cal.com/caleb-kiune-7dcvda/technical-strategy-call"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Book Strategy Call
                                    <Calendar className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>

                            <Button asChild variant="outline" size="lg" className="h-12 px-6 md:px-8 text-sm font-medium border-slate-700 bg-transparent text-slate-300 hover:bg-slate-800 hover:text-white hover:border-slate-600 rounded-md transition-all">
                                <Link href="#work">
                                    View Work
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
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

                    {/* RIGHT COLUMN: The Visual Hook (Hidden on Mobile) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative hidden md:block h-[400px] lg:h-[500px] w-full"
                    >
                        {/* Abstract Representation of "Structure" */}
                        <div className="absolute inset-0 bg-surface-50 border border-surface-100 rounded-2xl backdrop-blur-sm overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-700 ease-out">
                            {/* Terminal-like header */}
                            <div className="h-10 border-b border-surface-100 bg-surface-100/50 flex items-center px-4 gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/20" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                                <div className="w-3 h-3 rounded-full bg-green-500/20" />
                            </div>

                            {/* Code/Data Visualization */}
                            <div className="p-6 lg:p-8 space-y-6 opacity-80">
                                <div className="flex items-center justify-between border-b border-white/5 pb-4">
                                    <div className="space-y-1">
                                        <div className="h-2 w-24 bg-primary/40 rounded" />
                                        <div className="h-2 w-16 bg-slate-700 rounded" />
                                    </div>
                                    <div className="h-8 w-8 rounded-full bg-emerald-500/20 flex items-center justify-center animate-pulse">
                                        <div className="h-2 w-2 bg-emerald-400 rounded-full" />
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="h-2 w-full bg-slate-800 rounded animate-pulse" />
                                    <div className="h-2 w-3/4 bg-slate-800 rounded animate-pulse delay-75" />
                                    <div className="h-2 w-5/6 bg-slate-800 rounded animate-pulse delay-150" />
                                </div>
                                <div className="mt-6 lg:mt-8 p-4 bg-primary/10 rounded-lg border border-primary/20">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-xs font-mono text-primary animate-pulse">System Health</span>
                                        <span className="text-xs font-mono text-primary">99.9%</span>
                                    </div>
                                    <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                                        <div className="h-full w-[99.9%] bg-primary shadow-[0_0_10px_2px_rgba(94,106,210,0.5)]" />
                                    </div>
                                </div>
                            </div>

                            {/* Floating Badge */}
                            <div className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 bg-surface-100 backdrop-blur-xl border border-white/10 p-3 lg:p-4 rounded-xl shadow-2xl">
                                <span className="text-xl lg:text-2xl">🚀</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}