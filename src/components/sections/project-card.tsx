"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowUpRight, MousePointer2, Cloud, ShieldCheck, Mail } from "lucide-react";
import {
    SiReact,
    SiTailwindcss,
    SiNextdotjs,
    SiSupabase,
    SiFramer,
    SiTypescript,
} from "react-icons/si";
import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

// Tech icon mapping - supports both react-icons and Lucide
const TECH_ICONS: Record<string, IconType | LucideIcon> = {
    // React ecosystem
    React: SiReact,
    "React.js": SiReact,
    "React 19": SiReact,
    // Next.js
    "Next.js": SiNextdotjs,
    "Next.js 14": SiNextdotjs,
    "Next.js 16": SiNextdotjs,
    // Styling
    Tailwind: SiTailwindcss,
    "Tailwind CSS": SiTailwindcss,
    "Tailwind v4": SiTailwindcss,
    // Backend/Database
    Supabase: SiSupabase,
    // Animation
    "Framer Motion": SiFramer,
    // Languages
    TypeScript: SiTypescript,
    // Tools (Lucide icons)
    "Lenis Scroll": MousePointer2,
    Cloudinary: Cloud,
    Zod: ShieldCheck,
    Nodemailer: Mail,
};

export interface ProjectData {
    id: string;
    title: string;
    tag: string;
    hook: string;
    metric: string;
    stack: string[];
    imageSrc: string | StaticImageData;
    demoUrl?: string;
}

interface ProjectCardProps {
    project: ProjectData;
    featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
    return (
        <motion.article
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={cn(
                "group relative flex flex-col overflow-hidden rounded-xl bg-[#161b22] border border-white/5 hover:border-white/15 transition-all duration-300",
                featured
                    ? "h-[420px] md:h-[480px] lg:h-[520px]"
                    : "h-[400px] md:h-[460px]"
            )}
        >
            {/* Subtle glow on hover */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/8 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />

            {/* Top: Image Container - Variable Height Based on Featured */}
            <div className={cn(
                "relative overflow-hidden rounded-t-xl",
                featured ? "h-[55%]" : "h-[50%]"
            )}>
                <Image
                    src={project.imageSrc}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes={featured ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                />
                {/* Subtle bottom fade for seamless blend */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#161b22] via-transparent to-transparent opacity-50" />

                {/* External Link */}
                {project.demoUrl && (
                    <Link
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-4 right-4 z-20 p-2.5 rounded-lg bg-[#0F1117]/80 backdrop-blur-md border border-white/10 text-slate-300 hover:text-white hover:bg-white/20 hover:border-white/20 transition-all duration-200"
                    >
                        <ArrowUpRight className="w-4 h-4" />
                    </Link>
                )}
            </div>

            {/* Bottom: Content Container - Editorial Spacing */}
            <div className={cn(
                "relative z-10 flex flex-col justify-between",
                featured ? "h-[45%] p-6 md:p-8" : "h-[50%] p-5 md:p-6"
            )}>
                {/* Top Content Group */}
                <div className="space-y-3">
                    {/* Micro-Label: Industry Tag */}
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-400">
                        {project.tag}
                    </span>

                    {/* Project Name - De-emphasized */}
                    <h3 className="text-sm font-medium text-slate-400 group-hover:text-slate-300 transition-colors">
                        {project.title}
                    </h3>

                    {/* The Metric (Hero) - Editorial Display Typography */}
                    <p className={cn(
                        "font-display font-bold text-white tracking-tight leading-[1.1]",
                        featured
                            ? "text-2xl md:text-3xl lg:text-4xl"
                            : "text-xl md:text-2xl"
                    )}>
                        {project.metric}
                    </p>

                    {/* Hook Description - Clamped to 2 lines */}
                    <p className={cn(
                        "text-slate-500 leading-relaxed",
                        featured ? "text-sm md:text-base line-clamp-3" : "text-sm line-clamp-2"
                    )}>
                        {project.hook}
                    </p>
                </div>

                {/* Tech Stack Icons - Pinned to Bottom */}
                <div className="flex items-center gap-2.5 pt-4 border-t border-white/5 mt-auto">
                    {project.stack.map((tech) => {
                        const Icon = TECH_ICONS[tech];
                        if (!Icon) return null;
                        return (
                            <div
                                key={tech}
                                className="p-2 rounded-lg bg-slate-800/60 border border-slate-700/40 text-slate-500 group-hover:text-slate-400 group-hover:border-slate-600/60 transition-all duration-200"
                                title={tech}
                            >
                                <Icon className={cn(
                                    featured ? "w-4 h-4" : "w-3.5 h-3.5"
                                )} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </motion.article>
    );
}
