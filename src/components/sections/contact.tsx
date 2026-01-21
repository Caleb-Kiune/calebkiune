"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { CheckCircle2, Loader2, Send } from "lucide-react";

// Form Schema
const formSchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email address"),
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
                    access_key: "YOUR_ACCESS_KEY_HERE", // User to replace this
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
        } catch (err) {
            setError("Failed to send message. Please check your connection.");
        }
    };

    return (
        <section id="contact" className="py-16 md:py-24 px-6 bg-slate-50/50">
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
                                Thanks for reaching out. I'll be in touch shortly.
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
                            {/* Access Key Input (Already handled in onSubmit body, but can be hidden input if using standard form action. Here we use JSON fetch) */}

                            {/* Name Input */}
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="John Doe"
                                    className={`flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${errors.name ? "border-red-500 focus-visible:ring-red-500" : "border-input"
                                        }`}
                                    {...register("name")}
                                />
                                {errors.name && (
                                    <p className="text-sm text-red-500">{errors.name.message}</p>
                                )}
                            </div>

                            {/* Email Input */}
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="john@example.com"
                                    className={`flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${errors.email ? "border-red-500 focus-visible:ring-red-500" : "border-input"
                                        }`}
                                    {...register("email")}
                                />
                                {errors.email && (
                                    <p className="text-sm text-red-500">{errors.email.message}</p>
                                )}
                            </div>

                            {/* Message Input */}
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    placeholder="Tell me about your project..."
                                    rows={5}
                                    className={`flex w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${errors.message ? "border-red-500 focus-visible:ring-red-500" : "border-input"
                                        }`}
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

                            <Button type="submit" className="w-full" disabled={isSubmitting}>
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
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}
