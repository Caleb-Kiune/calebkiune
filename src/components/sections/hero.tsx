"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Download, Terminal, Calendar } from "lucide-react";

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
            {/* Background: Oxford Navy Base + Subtle Grid */}
            <div className="absolute inset-0 bg-background z-0" />
            <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 z-0" />

            <div className="container mx-auto max-w-5xl flex flex-col items-center text-center gap-8 md:gap-10 relative z-10">

                {/* 1. Authority Badge (Terminal Status Line) */}
                <div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-slate-900/50 border border-slate-800 text-slate-400 text-sm font-mono tracking-tight"
                >
                    <Terminal className="h-4 w-4 text-primary" />
                    <span>[System Online] • Nairobi, KE</span>
                </div>

                {/* 2. The "Authority" Headline */}
                <div className="space-y-6">
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-white leading-[0.9]">
                        CALEB KIUNE
                    </h1>
                    <p className="text-xl md:text-3xl font-light text-slate-400 max-w-3xl mx-auto leading-relaxed">
                        Building <span className="text-accent font-medium">high-ROI systems</span> with <span className="text-primary font-medium">robust architecture</span>.
                    </p>
                </div>

                {/* 3. CTA Cluster - Business First */}
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-8">
                    {/* Primary: High Contrast Business */}
                    <Button asChild size="lg" className="h-14 px-8 text-base font-semibold bg-white text-slate-900 hover:bg-slate-200 transition-all rounded-sm">
                        <Link href="https://cal.com/caleb-kiune-7dcvda/technical-strategy-call" target="_blank">
                            Book Strategy Call
                            <Calendar className="ml-2 h-4 w-4 text-slate-600" />
                        </Link>
                    </Button>

                    {/* Secondary: Technical/Legacy */}
                    <Button asChild variant="outline" size="lg" className="h-14 px-8 text-base font-mono border-slate-800 text-slate-400 hover:bg-slate-900 hover:text-white transition-all rounded-sm">
                        <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                            Download CV
                            <Download className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>

                {/* 4. Tech Stack Status Line */}
                <div className="pt-16 flex flex-col items-center gap-4 text-xs font-mono text-slate-600 uppercase tracking-widest">
                    <p>Operational Architecture</p>
                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 opacity-60">
                        <span className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                            Next.js_15
                        </span>
                        <span>TypeScript</span>
                        <span>PostgreSQL</span>
                        <span>Supabase</span>
                    </div>
                </div>

            </div>
        </section>
    );
}
