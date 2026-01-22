"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Form Schema
const formSchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email address"),
    type: z.enum(["freelance", "fulltime", "other"] as const, {
        message: "Please select an inquiry type",
    }),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

export function Contact() {
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: FormValues) => {
        setError(null);
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: "954bee54-dbde-450f-9ae3-8fa2ce34566a",
                    ...data,
                }),
            });

            const result = await response.json();

            if (result.success) {
                setIsSuccess(true);
                reset();
            } else {
                setError(result.message || "Something went wrong. Please try again.");
            }
        } catch {
            setError("Failed to send message. Please check your connection.");
        }
    };

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
                    {isSuccess ? (
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
                                onClick={() => setIsSuccess(false)}
                                className="mt-4"
                            >
                                Send another message
                            </Button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            {/* Name Input */}
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-slate-700">
                                    Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="John Doe"
                                    className={cn(inputClasses, errors.name && "border-red-500 focus:ring-red-500")}
                                    {...register("name")}
                                />
                                {errors.name && (
                                    <p className="text-sm text-red-500">{errors.name.message}</p>
                                )}
                            </div>

                            {/* Email Input */}
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-slate-700">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="john@example.com"
                                    className={cn(inputClasses, errors.email && "border-red-500 focus:ring-red-500")}
                                    {...register("email")}
                                />
                                {errors.email && (
                                    <p className="text-sm text-red-500">{errors.email.message}</p>
                                )}
                            </div>

                            {/* Inquiry Type Dropdown */}
                            <div className="space-y-2">
                                <label htmlFor="type" className="text-sm font-medium text-slate-700">
                                    I am interested in...
                                </label>
                                <select
                                    id="type"
                                    className={cn(inputClasses, errors.type && "border-red-500 focus:ring-red-500")}
                                    defaultValue=""
                                    {...register("type")}
                                >
                                    <option value="" disabled>Select an option</option>
                                    <option value="freelance">Freelance Project (Build an App)</option>
                                    <option value="fulltime">Full-Time Opportunity (Hiring)</option>
                                    <option value="other">Other Inquiry</option>
                                </select>
                                {errors.type && (
                                    <p className="text-sm text-red-500">{errors.type.message}</p>
                                )}
                            </div>

                            {/* Message Input */}
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-slate-700">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    placeholder="Tell me about your project..."
                                    rows={5}
                                    className={cn(inputClasses, errors.message && "border-red-500 focus:ring-red-500")}
                                    {...register("message")}
                                />
                                {errors.message && (
                                    <p className="text-sm text-red-500">{errors.message.message}</p>
                                )}
                            </div>

                            {error && (
                                <div className="p-3 bg-red-50 border border-red-100 rounded-md text-sm text-red-600">
                                    {error}
                                </div>
                            )}

                            <div className="flex flex-col md:flex-row gap-4 pt-2">
                                <Button type="submit" className="flex-1 order-2 md:order-1" size="lg" disabled={isSubmitting}>
                                    {isSubmitting ? (
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

                                <Button asChild variant="secondary" size="lg" className="flex-1 order-1 md:order-2 bg-white text-slate-700 border border-slate-300 hover:bg-slate-50">
                                    <a href="https://cal.com/caleb-kiune-7dcvda/technical-strategy-call" target="_blank" rel="noopener noreferrer">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-2">
                                            <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                                            <line x1="16" x2="16" y1="2" y2="6" />
                                            <line x1="8" x2="8" y1="2" y2="6" />
                                            <line x1="3" x2="21" y1="10" y2="10" />
                                        </svg>
                                        Book Strategy Call
                                    </a>
                                </Button>
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
