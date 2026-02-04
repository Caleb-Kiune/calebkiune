"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { motion } from "framer-motion";
import {
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiSupabase,
    SiPostgresql,
    SiPrisma,
    SiWhatsapp,
    SiGoogleanalytics,
} from "react-icons/si";
import { Smartphone } from "lucide-react";
import type { IconType } from "react-icons";
import type { LucideIcon } from "lucide-react";

// Type for tech stack items
interface TechItem {
    name: string;
    description: string;
    icon: IconType | LucideIcon;
}

interface TechCategory {
    title: string;
    items: TechItem[];
}

// Curated tech stack data - Rule of Three
const TECH_STACK: TechCategory[] = [
    {
        title: "Frontend Ecosystem",
        items: [
            { name: "Next.js", description: "Framework", icon: SiNextdotjs },
            { name: "TypeScript", description: "Reliability", icon: SiTypescript },
            { name: "Tailwind CSS", description: "Speed", icon: SiTailwindcss },
        ],
    },
    {
        title: "Backend Infrastructure",
        items: [
            { name: "Supabase", description: "BaaS", icon: SiSupabase },
            { name: "PostgreSQL", description: "Database", icon: SiPostgresql },
            { name: "Prisma", description: "Type-safe ORM", icon: SiPrisma },
        ],
    },
    {
        title: "Business & Tools",
        items: [
            { name: "M-Pesa Integration", description: "Daraja API", icon: Smartphone },
            { name: "WhatsApp Business", description: "Communication", icon: SiWhatsapp },
            { name: "Google Analytics", description: "ROI & Data", icon: SiGoogleanalytics },
        ],
    },
];

// Scroll-linked reveal variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1] as const,
        },
    },
};

const categoryVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1] as const,
            staggerChildren: 0.06,
            delayChildren: 0.1,
        },
    },
};

export function TechStack() {
    return (
        <section className="py-section md:py-section-lg bg-page">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    <motion.div variants={itemVariants}>
                        <SectionHeading
                            title="Technical Competence"
                            subtitle="A curated, production-grade stack built for scale and reliability."
                            className="mb-16 md:mb-20"
                        />
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
                        {TECH_STACK.map((category, categoryIdx) => (
                            <motion.div
                                key={category.title}
                                variants={categoryVariants}
                                custom={categoryIdx}
                                className="group"
                            >
                                {/* Category Header */}
                                <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500 mb-6 pb-4 border-b border-slate-800/50">
                                    {category.title}
                                </h3>

                                {/* Tech Items - Vertical Stack */}
                                <div className="space-y-4">
                                    {category.items.map((item) => {
                                        const Icon = item.icon;
                                        return (
                                            <motion.div
                                                key={item.name}
                                                variants={itemVariants}
                                                className="group/item flex items-center gap-4 p-3 -mx-3 rounded-lg hover:bg-surface transition-colors duration-200 cursor-default"
                                            >
                                                {/* Icon */}
                                                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-surface-elevated/60 border border-slate-700/40 group-hover/item:border-slate-600/60 transition-colors">
                                                    <Icon className="w-4.5 h-4.5 text-slate-400 group-hover/item:text-slate-200 transition-colors" />
                                                </div>

                                                {/* Text */}
                                                <div className="flex-1 min-w-0">
                                                    <h4 className="text-sm font-medium text-slate-300 group-hover/item:text-slate-100 transition-colors">
                                                        {item.name}
                                                    </h4>
                                                    <p className="text-xs text-slate-500 group-hover/item:text-slate-400 transition-colors">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
