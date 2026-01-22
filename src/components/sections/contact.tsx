"use client";

import { useActionState, useEffect, useState } from "react";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { CheckCircle2, Loader2, Send } from "lucide-react";
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
    const inputClasses = "w-full p-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-indigo-600 outline-none transition-all bg-white";

    return (
        <motion.section
            id="contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="py-16 md:py-24 px-6 bg-slate-50/50"
        >
            <div className="container mx-auto max-w-2xl">
                <SectionHeading
                    title="Let's Work Together"
                    subtitle="Have a project in mind? Send me a message and I'll get back to you within 24 hours."
                    className="mb-10"
                />

                <div className="bg-white p-6 md:p-8 rounded-lg border border-slate-200 shadow-sm">
                    {showSuccess ? (
                        <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
                            <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                <CheckCircle2 className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-semibold text-slate-900">Message Sent!</h3>
                            <p className="text-slate-500">
                                Thanks for reaching out. I&apos;ll be in touch shortly.
                            </p>
                            <Button
                                variant="outline"
                                onClick={() => setShowSuccess(false)}
                                className="mt-4"
                            >
                                Send another message
                            </Button>
                        </div>
                    ) : (
                        <form action={formAction} className="space-y-6">
                            {/* Name Input */}
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-slate-700">
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
                                    <p className="text-sm text-red-500">{state.errors.name[0]}</p>
                                )}
                            </div>

                            {/* Email Input */}
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-slate-700">
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
                                    <p className="text-sm text-red-500">{state.errors.email[0]}</p>
                                )}
                            </div>

                            {/* Inquiry Type Dropdown */}
                            <div className="space-y-2">
                                <label htmlFor="type" className="text-sm font-medium text-slate-700">
                                    I am interested in...
                                </label>
                                <select
                                    id="type"
                                    name="type"
                                    className={cn(inputClasses, state?.errors?.type && "border-red-500 focus:ring-red-500")}
                                    defaultValue=""
                                >
                                    <option value="" disabled>Select an option</option>
                                    <option value="freelance">Project Inquiry</option>
                                    <option value="fulltime">Long-term Partnership</option>
                                    <option value="other">General Inquiry</option>
                                </select>
                                {state?.errors?.type && (
                                    <p className="text-sm text-red-500">{state.errors.type[0]}</p>
                                )}
                            </div>

                            {/* Message Input */}
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-slate-700">
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
                                    <p className="text-sm text-red-500">{state.errors.message[0]}</p>
                                )}
                            </div>

                            {state?.message && !state?.success && (
                                <div className="p-3 bg-red-50 border border-red-100 rounded-md text-sm text-red-600">
                                    {state.message}
                                </div>
                            )}

                            <div className="flex flex-col md:flex-row gap-4 pt-2">
                                <Button type="submit" className="flex-1 order-2 md:order-1" size="lg" disabled={isPending}>
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
                                    className={cn(buttonVariants({ variant: "secondary", size: "lg" }), "flex-1 order-1 md:order-2 bg-white text-slate-700 border border-slate-300 hover:bg-slate-50")}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-2">
                                        <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                                        <line x1="16" x2="16" y1="2" y2="6" />
                                        <line x1="8" x2="8" y1="2" y2="6" />
                                        <line x1="3" x2="21" y1="10" y2="10" />
                                    </svg>
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
