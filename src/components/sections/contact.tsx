"use client";

import { useActionState, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { CheckCircle2, Loader2, Send, Calendar, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { submitContactForm } from "@/app/actions";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
};

export function Contact() {
    // using useActionState for form state management
    const [state, formAction, isPending] = useActionState(submitContactForm, null);

    // We can also keep local state for success view if we want to reset form or toggle view
    const [showSuccess, setShowSuccess] = useState(false);

    useEffect(() => {
        if (state?.success) {
            setShowSuccess(true);
        }
    }, [state?.success]);

    // DRY: Reusable input classes
    const inputClasses = "w-full p-3.5 rounded-lg border border-slate-700 focus:ring-2 focus:ring-primary outline-none transition-all bg-slate-900/50 text-slate-200 placeholder:text-slate-500";

    return (
        <motion.section
            id="contact"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="py-section md:py-section-lg px-6 border-t border-slate-800 bg-background"
        >
            <div className="container mx-auto max-w-2xl">
                <SectionHeading
                    title="Let's Work Together"
                    subtitle="Have a project in mind? Send me a message and I'll get back to you within 24 hours."
                    className="mb-10"
                />

                <div className="bg-slate-900/30 p-6 md:p-8 rounded-sm border border-slate-800 backdrop-blur-sm">
                    {showSuccess ? (
                        <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
                            <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                <CheckCircle2 className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-semibold text-white">Message Sent!</h3>
                            <p className="text-slate-400">
                                Thanks for reaching out. I&apos;ll be in touch shortly.
                            </p>
                            <Button
                                variant="outline"
                                onClick={() => setShowSuccess(false)}
                                className="mt-4 border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white"
                            >
                                Send another message
                            </Button>
                        </div>
                    ) : (
                        <form action={formAction} className="space-y-6">
                            {/* Name Input */}
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-slate-300">
                                    Name
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="John Doe"
                                    className={cn(inputClasses, state?.errors?.name && "border-red-500 focus:ring-red-500")}
                                />
                                {state?.errors?.name && (
                                    <p className="text-sm text-red-400">{state.errors.name[0]}</p>
                                )}
                            </div>

                            {/* Email Input */}
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-slate-300">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="john@example.com"
                                    className={cn(inputClasses, state?.errors?.email && "border-red-500 focus:ring-red-500")}
                                />
                                {state?.errors?.email && (
                                    <p className="text-sm text-red-400">{state.errors.email[0]}</p>
                                )}
                            </div>

                            {/* Inquiry Type Dropdown */}
                            <div className="space-y-2">
                                <label htmlFor="type" className="text-sm font-medium text-slate-300">
                                    I am interested in...
                                </label>
                                <select
                                    id="type"
                                    name="type"
                                    className={cn(inputClasses, state?.errors?.type && "border-red-500 focus:ring-red-500")}
                                    defaultValue=""
                                >
                                    <option value="" disabled className="bg-slate-900 text-slate-500">Select an option</option>
                                    <option value="freelance" className="bg-slate-900">Project Inquiry</option>
                                    <option value="fulltime" className="bg-slate-900">Long-term Partnership</option>
                                    <option value="other" className="bg-slate-900">General Inquiry</option>
                                </select>
                                {state?.errors?.type && (
                                    <p className="text-sm text-red-400">{state.errors.type[0]}</p>
                                )}
                            </div>

                            {/* Message Input */}
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-slate-300">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Tell me about your project..."
                                    rows={5}
                                    className={cn(inputClasses, state?.errors?.message && "border-red-500 focus:ring-red-500")}
                                />
                                {state?.errors?.message && (
                                    <p className="text-sm text-red-400">{state.errors.message[0]}</p>
                                )}
                            </div>

                            {state?.message && !state?.success && (
                                <div className="p-3 bg-red-900/20 border border-red-900/50 rounded-md text-sm text-red-400">
                                    {state.message}
                                </div>
                            )}

                            <div className="flex flex-col md:flex-row gap-4 pt-2">
                                {/* Premium Shimmer Submit Button */}
                                <motion.button
                                    type="submit"
                                    disabled={isPending}
                                    whileHover={{ scale: isPending ? 1 : 1.02 }}
                                    whileTap={{ scale: isPending ? 1 : 0.98 }}
                                    className="group relative flex-1 order-2 md:order-1 h-12 inline-flex items-center justify-center overflow-hidden rounded-lg bg-white text-[#0F1117] text-sm font-semibold uppercase tracking-wide shadow-lg shadow-white/10 transition-all duration-300 hover:shadow-white/20 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {/* Shimmer overlay */}
                                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:translate-x-full transition-transform duration-700 ease-out" />
                                    <span className="relative z-10 flex items-center gap-2">
                                        {isPending ? (
                                            <>
                                                <Loader2 className="h-4 w-4 animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="h-4 w-4" />
                                                Send Message
                                            </>
                                        )}
                                    </span>
                                </motion.button>

                                {/* Secondary CTA - Glassmorphism */}
                                <motion.a
                                    href="https://cal.com/caleb-kiune-7dcvda/technical-strategy-call"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="flex-1 order-1 md:order-2 h-12 inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm text-slate-300 text-sm font-medium transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:text-white"
                                >
                                    <Calendar className="w-4 h-4" />
                                    Book Strategy Call
                                </motion.a>
                            </div>

                            {/* Privacy Footer */}
                            <p className="text-xs text-center text-slate-500 mt-4">
                                Your data is safe. I usually reply within 24 hours.
                            </p>

                            {/* WhatsApp Link - Underline Animation */}
                            <div className="pt-6 border-t border-slate-800 flex justify-center">
                                <a
                                    href="https://wa.me/254705774171"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex items-center gap-2 text-sm text-slate-400 hover:text-emerald-400 transition-colors"
                                >
                                    <MessageCircle className="h-4 w-4" />
                                    <span className="relative">
                                        Prefer a quick chat? Message on WhatsApp
                                        <span className="absolute bottom-0 left-0 w-0 h-px bg-emerald-400 group-hover:w-full transition-all duration-300" />
                                    </span>
                                </a>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </motion.section>
    );
}
