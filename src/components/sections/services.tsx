"use client";

import { services } from '@/lib/constants/services';
import { SectionHeading } from '@/components/ui/section-heading';
import { Smartphone, Layout, Server, Database, Code, Globe, Zap, Rocket, TrendingUp } from 'lucide-react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

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

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

export function Services() {
    return (
        <section className="py-12 md:py-20 lg:py-24 border-y border-slate-800 bg-slate-900/20" id="services">
            <div className="container px-4 md:px-6 mx-auto">
                <SectionHeading
                    title="My Expertise"
                    subtitle="Bridging the gap between complex technical problems and seamless user experiences."
                    className="mb-8 md:mb-12"
                />

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {services.map((service, index) => {
                        const IconComponent = service.icon ? IconMap[service.icon] : Code;

                        return (
                            <motion.div
                                key={index}
                                variants={item}
                                className={cn(
                                    "group relative overflow-hidden rounded-sm bg-slate-900/50 p-6 shadow-sm transition-all hover:bg-slate-800 border border-slate-800",
                                )}
                            >
                                <div className="flex flex-col gap-4">
                                    <div className={cn(
                                        "p-3 w-fit rounded-sm bg-slate-800 text-primary",
                                    )}>
                                        <IconComponent className="h-6 w-6" />
                                    </div>

                                    <div className="space-y-2">
                                        <h3 className="font-bold text-xl text-slate-200">{service.title}</h3>
                                        <p className="text-slate-400 text-sm leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
