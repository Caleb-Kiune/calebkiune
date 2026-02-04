"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { TESTIMONIALS } from "@/lib/constants/testimonials";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

// Scroll-linked reveal variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1] as const,
        },
    },
};

export function Testimonials() {
    return (
        <section className="py-section md:py-section-lg border-y border-slate-800 bg-page" id="testimonials">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    <motion.div variants={itemVariants}>
                        <SectionHeading
                            title="What Clients Say"
                            subtitle="Trusted by businesses to deliver ROI-driven software."
                            className="mb-12 md:mb-16"
                        />
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
                        variants={containerVariants}
                    >
                        {TESTIMONIALS.map((testimonial) => (
                            <motion.div
                                key={testimonial.id}
                                variants={itemVariants}
                                className="bg-surface p-6 md:p-8 rounded-xl border border-slate-800 flex flex-col gap-5 hover:border-slate-700 hover:bg-surface-elevated transition-all duration-300"
                            >
                                <Quote className="h-8 w-8 text-accent/50 fill-accent/10" />
                                <p className="text-slate-300 italic flex-grow leading-relaxed">&quot;{testimonial.quote}&quot;</p>
                                <div className="pt-4 border-t border-slate-800">
                                    <p className="font-display font-semibold text-white tracking-tight">{testimonial.name}</p>
                                    <p className="text-sm text-slate-500">{testimonial.role}, {testimonial.company}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
