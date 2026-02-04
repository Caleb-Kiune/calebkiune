"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Calendar, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Reviews", href: "#testimonials" },
];

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Handle scroll state for glass effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => { document.body.style.overflow = "unset"; };
    }, [isMobileMenuOpen]);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? "bg-slate-950/80 backdrop-blur-md border-b border-white/5 py-3" : "bg-transparent py-5"
                }`}
        >
            <div className="container mx-auto px-6 h-12 flex items-center justify-between relative z-50">
                {/* Brand Logo - The "Cockpit" ID */}
                <Link
                    href="/"
                    className="text-lg md:text-xl font-bold tracking-tight text-white hover:text-slate-200 transition-colors z-50 relative"
                    onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: "smooth" });
                        setIsMobileMenuOpen(false);
                    }}
                >
                    CALEB KIUNE
                </Link>

                {/* DESKTOP NAV - Minimalist Center */}
                <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* DESKTOP CTA - Right Wing */}
                <div className="hidden md:block">
                    <Button asChild size="sm" className="bg-white text-slate-900 hover:bg-slate-200 rounded-sm font-semibold px-5">
                        <Link href="https://cal.com/caleb-kiune-7dcvda/technical-strategy-call" target="_blank">
                            Book Strategy Call
                        </Link>
                    </Button>
                </div>

                {/* MOBILE TOGGLE */}
                <button
                    className="md:hidden text-slate-200 hover:text-white relative z-50 p-1"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* ROBUST MOBILE MENU - Absolute Dropdown (No Transparency Glitch) */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="absolute top-full left-0 w-full bg-slate-950 border-b border-slate-800 shadow-2xl md:hidden flex flex-col pt-2 pb-8 px-6 gap-2"
                        style={{ height: "calc(100vh - 4rem)" }} // Fallback full height if needed, but container flow is better
                    >
                        {/* Mobile Links List */}
                        <div className="flex flex-col space-y-1 pt-4">
                            {NAV_LINKS.map((link, idx) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="group flex items-center justify-between py-4 border-b border-slate-900 text-lg font-medium text-slate-300 hover:text-white hover:bg-slate-900/50 px-2 rounded-sm transition-all"
                                >
                                    {link.name}
                                    <ChevronRight className="h-4 w-4 text-slate-600 group-hover:text-primary transition-colors" />
                                </Link>
                            ))}
                        </div>

                        {/* Mobile CTA */}
                        <div className="mt-8">
                            <Button asChild className="w-full h-12 text-base bg-primary text-slate-900 hover:bg-emerald-400 font-bold">
                                <Link href="https://cal.com/caleb-kiune-7dcvda/technical-strategy-call" target="_blank">
                                    Book Strategy Call
                                    <Calendar className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
