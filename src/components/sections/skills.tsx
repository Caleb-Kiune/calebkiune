"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { SKILLS_DATA } from "@/lib/constants/skills";
import { Layout, Server, TrendingUp, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const ICONS = [Layout, Server, TrendingUp];

export function SkillsSection() {
    return (
        <section className="py-24 border-y border-slate-800 bg-slate-950" id="skills">
            <div className="container mx-auto px-6 max-w-6xl">
                <SectionHeading
                    title="Technical Competence"
                    subtitle="A production-grade stack built for scale and reliability."
                    className="mb-16"
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {SKILLS_DATA.map((category, idx) => {
                        const Icon = ICONS[idx] || Layout;
                        return (
                            <motion.div
                                key={category.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.5 }}
                                className="group relative overflow-hidden rounded-md border border-slate-800 bg-slate-900/40 p-8 hover:border-slate-700 transition-colors"
                            >
                                {/* Header */}
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2 rounded-sm bg-slate-800 text-primary">
                                        <Icon className="h-5 w-5" />
                                    </div>
                                    <h3 className="font-bold text-lg text-slate-200">{category.title}</h3>
                                </div>

                                {/* List */}
                                <ul className="space-y-3">
                                    {category.skills.map((skill) => (
                                        <li key={skill} className="flex items-center gap-3 text-sm text-slate-400">
                                            <CheckCircle2 className="h-4 w-4 text-emerald-500/80 shrink-0" />
                                            <span>{skill}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
