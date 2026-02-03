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
    index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="group relative flex flex-col overflow-hidden rounded-lg bg-[#161b22] border border-white/5 hover:border-white/10 transition-all duration-300 h-[400px] md:h-[420px]"
        >
            {/* Subtle glow on hover */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />

            {/* Top: Image Container - 50% Height */}
            <div className="relative h-1/2 overflow-hidden rounded-t-lg">
                <Image
                    src={project.imageSrc}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Subtle bottom fade for seamless blend */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#161b22] via-transparent to-transparent opacity-40" />

                {/* External Link */}
                {project.demoUrl && (
                    <Link
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-4 right-4 z-20 p-2 rounded-md bg-[#0F1117]/80 backdrop-blur-md border border-white/10 text-slate-300 hover:text-white hover:bg-white/20 transition-colors"
                    >
                        <ArrowUpRight className="w-4 h-4" />
                    </Link>
                )}
            </div>

            {/* Bottom: Content Container - 50% Height */}
            <div className="relative z-10 flex flex-col h-1/2 p-5 justify-between">
                {/* Top Content Group */}
                <div className="space-y-2">
                    {/* Micro-Label: Industry Tag */}
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-400">
                        {project.tag}
                    </span>

                    {/* Project Name */}
                    <h3 className="text-sm font-medium text-slate-400 group-hover:text-slate-300 transition-colors">
                        {project.title}
                    </h3>

                    {/* The Metric (Hero) */}
                    <p className="text-xl md:text-2xl font-bold text-white tracking-tight leading-tight">
                        {project.metric}
                    </p>

                    {/* Hook Description - Clamped to 2 lines */}
                    <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">
                        {project.hook}
                    </p>
                </div>

                {/* Tech Stack Icons - Pinned to Bottom */}
                <div className="flex items-center gap-2 pt-3 border-t border-white/5 mt-auto">
                    {project.stack.map((tech) => {
                        const Icon = TECH_ICONS[tech];
                        if (!Icon) return null;
                        return (
                            <div
                                key={tech}
                                className="p-1.5 rounded-md bg-slate-800/50 text-slate-500 group-hover:text-slate-400 transition-colors"
                                title={tech}
                            >
                                <Icon className="w-3.5 h-3.5" />
                            </div>
                        );
                    })}
                </div>
            </div>
        </motion.article>
    );
}
