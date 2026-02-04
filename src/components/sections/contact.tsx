"use client";

import { useActionState, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { CheckCircle2, Loader2, Send, Calendar, MessageCircle, ChevronDown, Briefcase, Users, HelpCircle, Check, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
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

    // Custom dropdown state
    const [isOpen, setIsOpen] = useState(false);
    const [selectedType, setSelectedType] = useState("");

    // Inquiry type options
    const inquiryOptions = [
        { id: "freelance", label: "Project Inquiry", icon: Briefcase },
        { id: "fulltime", label: "Long-term Partnership", icon: Users },
        { id: "other", label: "General Inquiry", icon: HelpCircle },
    ];

    const selectedOption = inquiryOptions.find(opt => opt.id === selectedType);

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
            className="py-section md:py-section-lg border-t border-slate-800 bg-page"
        >
            <div className="container mx-auto px-6 max-w-6xl">
                <SectionHeading
                    title="Let's Connect"
                    subtitle="Whether you have a technical question or a project proposal, I’d love to hear from you."
                    className="mb-10"
                />

                <div className="w-full max-w-lg mx-auto">
                    {/* Direct Contact Cards - Zero Friction */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        {/* Email Card */}
                        <a
                            href="mailto:calebkiune@gmail.com"
                            className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-slate-800 hover:bg-surface-elevated hover:border-white/10 transition-all group"
                        >
                            <div className="h-10 w-10 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                                <Mail className="h-5 w-5" />
                            </div>
                            <div>
                                <h3 className="text-sm font-medium text-slate-200 group-hover:text-white">Email Me</h3>
                                <p className="text-xs text-slate-500">calebkiune@gmail.com</p>
                            </div>
                        </a>

                        {/* WhatsApp Card */}
                        <a
                            href="https://wa.me/254705774171"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-slate-800 hover:bg-surface-elevated hover:border-white/10 transition-all group"
                        >
                            <div className="h-10 w-10 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                                <FaWhatsapp className="h-5 w-5" />
                            </div>
                            <div>
                                <h3 className="text-sm font-medium text-slate-200 group-hover:text-white">WhatsApp</h3>
                                <p className="text-xs text-slate-500">+254 705 774 171</p>
                            </div>
                        </a>
                    </div>

                    <div className="bg-slate-900/30 p-6 md:p-6 rounded-xl border border-slate-800 backdrop-blur-sm">
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
                            <form action={formAction} className="space-y-4">
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
                                    <label className="text-sm font-medium text-slate-300">
                                        I am interested in...
                                    </label>

                                    {/* Hidden input for form action */}
                                    <input type="hidden" name="type" value={selectedType} />

                                    <div className="relative">
                                        {/* Click outside overlay */}
                                        {isOpen && (
                                            <div
                                                className="fixed inset-0 z-10"
                                                onClick={() => setIsOpen(false)}
                                            />
                                        )}

                                        {/* Trigger Button */}
                                        <div
                                            onClick={() => setIsOpen(!isOpen)}
                                            className={cn(
                                                inputClasses,
                                                "cursor-pointer flex items-center justify-between",
                                                state?.errors?.type && "border-red-500 focus:ring-red-500"
                                            )}
                                        >
                                            <span className={cn(
                                                "flex items-center gap-2",
                                                selectedOption ? "text-slate-200" : "text-slate-500"
                                            )}>
                                                {selectedOption ? (
                                                    <>
                                                        <selectedOption.icon className="h-4 w-4" />
                                                        {selectedOption.label}
                                                    </>
                                                ) : (
                                                    "Select an option"
                                                )}
                                            </span>
                                            <ChevronDown
                                                className={cn(
                                                    "h-4 w-4 text-slate-500 transition-transform duration-200",
                                                    isOpen && "rotate-180"
                                                )}
                                            />
                                        </div>

                                        {/* Dropdown Menu */}
                                        <AnimatePresence>
                                            {isOpen && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: -8 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -8 }}
                                                    transition={{ duration: 0.15 }}
                                                    className="absolute top-full left-0 right-0 mt-2 z-20 bg-slate-900/90 backdrop-blur-xl border border-slate-800 rounded-lg overflow-hidden shadow-xl"
                                                >
                                                    {inquiryOptions.map((option) => {
                                                        const Icon = option.icon;
                                                        const isSelected = selectedType === option.id;
                                                        return (
                                                            <div
                                                                key={option.id}
                                                                onClick={() => {
                                                                    setSelectedType(option.id);
                                                                    setIsOpen(false);
                                                                }}
                                                                className={cn(
                                                                    "flex items-center justify-between px-4 py-3 cursor-pointer transition-colors",
                                                                    isSelected
                                                                        ? "bg-primary/10 text-primary"
                                                                        : "text-slate-300 hover:bg-slate-800"
                                                                )}
                                                            >
                                                                <span className="flex items-center gap-3">
                                                                    <Icon className="h-4 w-4" />
                                                                    {option.label}
                                                                </span>
                                                                {isSelected && (
                                                                    <Check className="h-4 w-4" />
                                                                )}
                                                            </div>
                                                        );
                                                    })}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>

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
                                        rows={4}
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

                                <div className="pt-2">
                                    {/* Premium Shimmer Submit Button - Full Width */}
                                    <motion.button
                                        type="submit"
                                        disabled={isPending}
                                        whileHover={{ scale: isPending ? 1 : 1.02 }}
                                        whileTap={{ scale: isPending ? 1 : 0.98 }}
                                        className="group relative w-full h-auto py-4 md:py-3 inline-flex items-center justify-center overflow-hidden rounded-lg bg-white text-[#0F1117] text-sm font-semibold uppercase tracking-wide shadow-lg shadow-white/10 transition-all duration-300 hover:shadow-white/20 disabled:opacity-70 disabled:cursor-not-allowed"
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
                                </div>

                                {/* Privacy Footer */}
                                <p className="text-xs text-center text-slate-500 mt-4">
                                    I read every message personally.
                                </p>


                            </form>
                        )}
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
