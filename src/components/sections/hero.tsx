"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Terminal } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
            {/* Background enhancement (Subtle gradient mesh for premium feel) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-50/50 rounded-full blur-3xl -z-10 opacity-60" />

            <div className="container mx-auto max-w-4xl flex flex-col items-center text-center gap-8 md:gap-10">

                {/* 1. Authority Badge (Mini-resume in a pill) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-slate-600 text-sm font-medium"
                >
                    <Terminal className="h-4 w-4 text-indigo-500" />
                    <span>Full-Stack Software Developer • Nairobi, KE</span>
                </motion.div>

                {/* 2. The "Typographic" Brand Name */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    className="space-y-4"
                >
                    <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 leading-[0.9] text-transparent bg-clip-text bg-gradient-to-br from-slate-900 via-slate-800 to-slate-600">
                        CALEB KIUNE
                    </h1>
                    <p className="text-xl md:text-3xl font-light text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        I build <span className="text-indigo-600 font-medium">high-performance</span> digital products for ambitious brands and growing businesses.
                    </p>
                </motion.div>

                {/* 3. CTA Cluster */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4"
                >
                    <Button asChild size="lg" className="h-12 px-8 text-base shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 transition-all">
                        <Link href="#contact">
                            Book Strategy Call
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>

                    <Button asChild variant="outline" size="lg" className="h-12 px-8 text-base border-slate-300 hover:bg-slate-50">
                        {/* Ensure resume.pdf is in public folder */}
                        <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                            <Download className="mr-2 h-4 w-4" />
                            Download CV
                        </Link>
                    </Button>
                </motion.div>

                {/* 4. Social Proof / Tech Stack Micro-Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="pt-12 md:pt-16 flex flex-col items-center gap-3 text-sm text-slate-400"
                >
                    <p>Powering solutions with modern architecture</p>
                    <div className="flex gap-6 items-center opacity-75 grayscale hover:grayscale-0 transition-all duration-500">
                        <span className="font-semibold">Next.js</span>
                        <span className="w-1 h-1 bg-slate-300 rounded-full" />
                        <span className="font-semibold">TypeScript</span>
                        <span className="w-1 h-1 bg-slate-300 rounded-full" />
                        <span className="font-semibold">Tailwind</span>
                        <span className="w-1 h-1 bg-slate-300 rounded-full" />
                        <span className="font-semibold">PostgreSQL</span>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
