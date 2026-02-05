"use client";

import { motion } from "framer-motion";
import { MapPin, TrendingUp, ShieldCheck, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { FADE_UP_VARIANTS, STAGGER_CONTAINER_VARIANTS, VIEWPORT_CONFIG } from "@/lib/motion";

export function About() {
    return (
        <section id="about" className="relative py-section md:py-section-lg bg-page border-t border-slate-800">
            <div className="bg-noise" aria-hidden="true" />
            <div className="container relative z-10 mx-auto px-6 max-w-6xl">

                {/* Section Header */}
                <div className="mb-12 md:mb-16">
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                        From Underwriting to <span className="text-primary">Engineering</span>.
                    </h2>
                    <p className="text-slate-400 max-w-2xl text-lg">
                        I bridge the gap between complex business logic and reliable software.
                    </p>
                </div>

                {/* THE BENTO GRID */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={VIEWPORT_CONFIG}
                    variants={STAGGER_CONTAINER_VARIANTS}
                >
                    {/* CARD 1: The Narrative (Wide) */}
                    <motion.div
                        variants={FADE_UP_VARIANTS}
                        className="md:col-span-2 bg-surface border border-slate-800 p-8 rounded-card relative overflow-hidden group"
                    >

                        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <ShieldCheck className="w-5 h-5 text-primary" />
                            The Audit-Proof Mindset
                        </h3>
                        <p className="text-slate-400 leading-relaxed">
                            Most developers just write code. I build business solutions. With my background in
                            <span className="text-slate-200 font-medium"> Insurance Operations</span>, I understand risk, workflow efficiency, and the cost of downtime. I build systems that are not just technically sound, but operationally game-changing.
                        </p>
                    </motion.div>

                    {/* CARD 2: The Stats (Square) */}
                    <motion.div
                        variants={FADE_UP_VARIANTS}
                        className="md:col-span-1 bg-surface border border-slate-800 p-8 rounded-card flex flex-col justify-center items-center text-center group hover:bg-surface-elevated transition-colors"
                    >
                        <div className="mb-4 p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                            <TrendingUp className="w-8 h-8 text-primary" />
                        </div>
                        <div className="text-5xl font-bold text-white mb-2">5+</div>
                        <div className="text-sm font-medium text-slate-400 uppercase tracking-wider">
                            Years Industry Experience
                        </div>
                    </motion.div>

                    {/* CARD 3: Location (Square) */}
                    <motion.div
                        variants={FADE_UP_VARIANTS}
                        className="md:col-span-1 bg-surface border border-slate-800 p-8 rounded-card flex flex-col justify-between group hover:bg-surface-elevated transition-colors"
                    >
                        <div className="flex justify-between items-start">
                            <div className="p-3 rounded-inner bg-slate-800 group-hover:bg-slate-700 transition-colors">
                                <MapPin className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                                <span className="text-xs font-medium text-emerald-400">Active</span>
                            </div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-white mb-1">Nairobi, KE</div>
                            <div className="text-sm text-slate-500 flex items-center gap-2">
                                <Clock className="w-3 h-3" /> UTC+3 (EAT)
                            </div>
                        </div>
                    </motion.div>

                    {/* CARD 4: Philosophy/Stack (Wide) */}
                    <motion.div
                        variants={FADE_UP_VARIANTS}
                        className="md:col-span-2 bg-surface border border-slate-800 p-8 rounded-card"
                    >
                        <h3 className="text-xl font-bold text-white mb-4">Technical Precision</h3>
                        <p className="text-slate-400 mb-6">
                            I specialize in high-performance applications that scale with your revenue. Zero latency, 100% type safety, and automated compliance.
                        </p>

                        {/* Mini Tech Pills */}
                        <div className="flex flex-wrap gap-2">
                            {["Next.js 15", "TypeScript", "Tailwind", "Supabase", "PostgreSQL"].map((tech) => (
                                <span key={tech} className="px-3 py-1 rounded-inner bg-slate-800 text-xs font-medium text-slate-300 border border-slate-700">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}