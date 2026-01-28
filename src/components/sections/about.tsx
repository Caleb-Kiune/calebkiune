"use client";

import { motion } from "framer-motion";

export function About() {
    return (
        <section className="py-24 border-y border-slate-800 bg-slate-950" id="about">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">

                    {/* Column 1: The Hook */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                            Bridging the Gap Between <span className="text-primary">Insurance Operations</span> & Software.
                        </h2>
                    </motion.div>

                    {/* Column 2: The Narrative */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
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
                </div>
            </div>
        </section>
    );
}
