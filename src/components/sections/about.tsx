"use client";

import { motion } from "framer-motion";

// Scroll-linked reveal variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
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
            ease: [0.22, 1, 0.36, 1] as const, // easeOutExpo bezier
        },
    },
};

export function About() {
    return (
        <section className="py-section border-y border-slate-800 bg-page" id="about">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    {/* Column 1: The Hook */}
                    <motion.div
                        variants={itemVariants}
                        className="space-y-6"
                    >
                        <h2 className="font-display text-display-sm md:text-display-md text-white leading-tight">
                            Bridging the Gap Between{" "}
                            <span className="text-primary">Insurance Operations</span> & Software.
                        </h2>
                    </motion.div>

                    {/* Column 2: The Narrative */}
                    <motion.div
                        variants={itemVariants}
                        className="space-y-6 text-lg text-slate-400 leading-relaxed font-light"
                    >
                        <p>
                            Most developers write code. I build business solutions.
                        </p>
                        <p>
                            With <strong className="text-slate-200 font-medium">5+ years in the insurance industry</strong> (Underwriting & Ops), I don&apos;t just understand syntax—I understand risk, workflow efficiency, and the cost of downtime.
                        </p>
                        <p>
                            I transitioned to software engineering to automate the complex workflows I used to struggle with manually. Now, I help businesses build systems that are not just technically sound, but operationally game-changing.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
