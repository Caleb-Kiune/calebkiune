"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { TESTIMONIALS } from "@/lib/constants/testimonials";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

export function Testimonials() {
    return (
        <section className="py-16 md:py-24 bg-white border-y border-slate-50" id="testimonials">
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
                            className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-100 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <Quote className="h-8 w-8 text-indigo-500/20 fill-indigo-500" />
                            <p className="text-slate-600 italic flex-grow leading-relaxed">&quot;{testimonial.quote}&quot;</p>
                            <div className="pt-2 border-t border-slate-100/50">
                                <p className="font-semibold text-slate-900">{testimonial.client}</p>
                                <p className="text-sm text-slate-500">{testimonial.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
