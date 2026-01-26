"use client";

import { useActionState, useEffect, useState } from "react";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { CheckCircle2, Loader2, Send, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { submitContactForm } from "@/app/actions";

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
    const inputClasses = "w-full p-3 rounded-sm border border-slate-700 focus:ring-2 focus:ring-primary outline-none transition-all bg-slate-900/50 text-slate-200 placeholder:text-slate-500";

    return (
        <motion.section
            id="contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="py-16 md:py-24 px-6 border-t border-slate-800 bg-background"
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
                                <Button type="submit" className="flex-1 order-2 md:order-1 font-semibold text-slate-900 bg-white hover:bg-slate-200" size="lg" disabled={isPending}>
                                    {isPending ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="mr-2 h-4 w-4" />
                                            Send Message
                                        </>
                                    )}
                                </Button>

                                <Link
                                    href="https://cal.com/caleb-kiune-7dcvda/technical-strategy-call"
                                    target="_blank"
                                    className={cn(buttonVariants({ variant: "outline", size: "lg" }), "flex-1 order-1 md:order-2 border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white")}
                                >
                                    <Calendar className="w-4 h-4 mr-2" />
                                    Book Strategy Call
                                </Link>
                            </div>

                            {/* Privacy Footer */}
                            <p className="text-xs text-center text-slate-400 mt-4">
                                Your data is safe. I usually reply within 24 hours.
                            </p>
                        </form>
                    )}
                </div>
            </div>
        </motion.section>
    );
}
