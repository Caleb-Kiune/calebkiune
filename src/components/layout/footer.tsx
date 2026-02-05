"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa6";
import { Download, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { FADE_UP_VARIANTS, STAGGER_CONTAINER_VARIANTS, VIEWPORT_CONFIG } from "@/lib/motion";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-page border-t border-slate-800 pt-20 overflow-hidden relative">
            <motion.div
                className="container mx-auto px-6 max-w-6xl relative z-10"
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT_CONFIG}
                variants={STAGGER_CONTAINER_VARIANTS}
            >

                {/* THE BENTO FOOTER GRID */}
                <motion.div variants={FADE_UP_VARIANTS} className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-24">

                    {/* CARD 1: IDENTITY (Span 5) */}
                    <div className="md:col-span-5 bg-surface border border-slate-800 rounded-card p-8 flex flex-col h-full">

                        {/* Centered Content Block */}
                        <div className="flex-1 flex flex-col justify-center space-y-6">

                            {/* Status Indicator - The "Minimalist" Wireframe Style */}
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-transparent border border-slate-700 text-primary text-xs font-mono font-medium tracking-wide w-fit">
                                {/* The Activity Equalizer Icons */}
                                <div className="flex items-end gap-[2px] h-3">
                                    <span className="w-1 h-2 bg-primary rounded-full animate-pulse"></span>
                                    <span className="w-1 h-3 bg-primary rounded-full animate-pulse delay-75"></span>
                                    <span className="w-1 h-1.5 bg-primary rounded-full animate-pulse delay-150"></span>
                                </div>
                                <span className="text-slate-300">Active & Building</span>
                            </div>

                            <p className="text-slate-400 text-lg leading-relaxed">
                                Building <span className="text-white font-medium">audit-proof systems</span> for the next generation of Kenyan fintech.
                            </p>
                        </div>

                        {/* Footer Section - Anchored to bottom */}
                        <div className="mt-8 pt-8 border-t border-slate-800/50">
                            <p className="text-sm text-slate-500">Nairobi, KE • UTC+3</p>
                        </div>
                    </div>

                    {/* CARD 2: SOCIAL MATRIX (Span 4) */}
                    <div className="md:col-span-4 bg-surface border border-slate-800 rounded-card p-2">
                        <div className="grid grid-cols-2 gap-2 h-full">
                            {[
                                { icon: FaGithub, href: "https://github.com/Caleb-Kiune", label: "GitHub" },
                                { icon: FaLinkedin, href: "https://www.linkedin.com/in/caleb-kiune-b356a6327/", label: "LinkedIn" },
                                { icon: FaTwitter, href: "https://x.com/calebkiune", label: "X" },
                                { icon: FaWhatsapp, href: "https://wa.me/254705774171", label: "WhatsApp" }
                            ].map((social) => (
                                <Link
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    className="aspect-square flex flex-col items-center justify-center gap-2 bg-page/50 hover:bg-primary/10 rounded-card transition-all group border border-transparent hover:border-primary/20"
                                >
                                    <social.icon className="w-6 h-6 text-slate-400 group-hover:text-primary transition-colors" />
                                    <span className="text-xs font-medium text-slate-500 group-hover:text-primary transition-colors">{social.label}</span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* CARD 3: RESOURCES (Span 3) */}
                    <div className="md:col-span-3 flex flex-col gap-6">
                        {/* CV Download */}
                        <Link
                            href="/caleb-kiune-cv.pdf"
                            target="_blank"
                            className="flex-1 bg-surface border border-slate-800 rounded-card p-6 flex flex-col justify-center items-center gap-3 hover:border-primary/50 transition-colors group text-center"
                        >
                            <div className="p-3 rounded-full bg-slate-800 group-hover:bg-primary group-hover:text-black transition-all text-slate-300">
                                <Download className="w-5 h-5" />
                            </div>
                            <span className="text-sm font-medium text-white">Download CV</span>
                        </Link>

                        {/* Legal Badge */}
                        <div className="flex-1 bg-surface border border-slate-800 rounded-card p-6 flex flex-col justify-center items-center gap-2 text-center">
                            <ShieldCheck className="w-5 h-5 text-emerald-500" />
                            <span className="text-xs text-slate-500">Data Privacy Compliant<br />(DPA 2019)</span>
                        </div>
                    </div>
                </motion.div>

                {/* THE MIC DROP: MASSIVE TYPOGRAPHY */}
                <motion.div variants={FADE_UP_VARIANTS} className="border-t border-slate-800 pt-8 pb-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600 gap-4">
                    <p>© {currentYear} Kiune Technologies.</p>
                    <p>All Rights Reserved.</p>
                </motion.div>
            </motion.div>

            {/* Background Watermark - The Visual Anchor */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.02 }}
                transition={{ duration: 1.5 }}
                viewport={VIEWPORT_CONFIG}
                className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none opacity-[0.02]"
            >
                <h1 className="text-[15vw] md:text-[12vw] font-bold text-white leading-none text-center tracking-tighter whitespace-nowrap select-none">
                    KIUNE
                </h1>
            </motion.div>
        </footer>
    );
}