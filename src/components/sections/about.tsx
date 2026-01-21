"use client";

import { motion } from "framer-motion";

export function About() {
    return (
        <section className="py-20 bg-slate-100 border-y border-slate-200">
            <div className="container mx-auto max-w-3xl px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                >
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                        More Than Just Code.
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        Most developers just write syntax. With{" "}
                        <span className="font-semibold text-indigo-600">
                            5+ years in the Insurance Industry
                        </span>
                        , I understand that software needs to drive revenue, not just look
                        good. I bridge the gap between complex engineering and clear business
                        ROI.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
