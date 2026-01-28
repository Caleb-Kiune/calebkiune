"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { TESTIMONIALS } from "@/lib/constants/testimonials";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

export function Testimonials() {
    return (
        <section className="py-16 md:py-24 border-y border-slate-800 bg-background" id="testimonials">
            <div className="container mx-auto px-6 max-w-6xl">
                <SectionHeading
                    title="What Clients Say"
                    subtitle="Trusted by businesses to deliver ROI-driven software."
                    className="mb-12"
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {TESTIMONIALS.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-slate-900/50 p-6 md:p-8 rounded-sm border border-slate-800 flex flex-col gap-4 hover:border-slate-700 transition-colors"
                        >
                            <Quote className="h-8 w-8 text-accent/50 fill-accent/10" />
                            <p className="text-slate-300 italic flex-grow leading-relaxed">&quot;{testimonial.quote}&quot;</p>
                            <div className="pt-2 border-t border-slate-800">
                                <p className="font-semibold text-white font-mono tracking-tight">{testimonial.name}</p>
                                <p className="text-sm text-slate-500">{testimonial.role}, {testimonial.company}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
