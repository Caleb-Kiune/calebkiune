"use client";

import { services } from '@/lib/constants/services';
import { SectionHeading } from '@/components/ui/section-heading';
import { Smartphone, Layout, Server, Database, Code, Globe, Zap, Rocket, TrendingUp } from 'lucide-react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { FADE_UP_VARIANTS, STAGGER_CONTAINER_VARIANTS, VIEWPORT_CONFIG } from "@/lib/motion";

const IconMap: Record<string, LucideIcon> = {
    "Smartphone": Smartphone,
    "Layout": Layout,
    "Server": Server,
    "Database": Database,
    "Code": Code,
    "Globe": Globe,
    "Zap": Zap,
    "Rocket": Rocket,
    "TrendingUp": TrendingUp,
};

export function Services() {
    return (
        <section className="relative py-section border-y border-slate-800 bg-page" id="services">
            <div className="bg-noise" aria-hidden="true" />
            <div className="container relative z-10 px-6 mx-auto max-w-6xl">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={VIEWPORT_CONFIG}
                    variants={STAGGER_CONTAINER_VARIANTS}
                >
                    <motion.div variants={FADE_UP_VARIANTS}>
                        <SectionHeading
                            title="My Expertise"
                            subtitle="Bridging the gap between complex technical problems and seamless user experiences."
                            className="mb-12 md:mb-16"
                        />
                    </motion.div>

                    <motion.div
                        variants={STAGGER_CONTAINER_VARIANTS}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                    >
                        {services.map((service, index) => {
                            const IconComponent = service.icon ? IconMap[service.icon] : Code;

                            return (
                                <motion.div
                                    key={index}
                                    variants={FADE_UP_VARIANTS}
                                    className={cn(
                                        "group relative overflow-hidden rounded-card bg-surface p-6 md:p-8 shadow-sm transition-all hover:bg-surface-elevated border border-slate-800 hover:border-slate-700",
                                    )}
                                >
                                    <div className="flex flex-col gap-5">
                                        <div className={cn(
                                            "p-3.5 w-fit rounded-inner bg-surface-elevated border border-slate-700/50 text-primary group-hover:bg-slate-700 transition-colors",
                                        )}>
                                            <IconComponent className="h-6 w-6" />
                                        </div>

                                        <div className="space-y-2.5">
                                            <h3 className="font-display font-bold text-xl text-slate-200 group-hover:text-white transition-colors">{service.title}</h3>
                                            <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
