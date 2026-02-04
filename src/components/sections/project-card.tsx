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
}

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <motion.article
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="group relative flex flex-col h-full overflow-hidden rounded-2xl bg-[#161b22] border border-white/5 hover:border-white/15 transition-all duration-300"
        >
            {/* Subtle glow on hover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />

            {/* Top: Image Section - Intrinsic Aspect Ratio */}
            <div className="relative w-full aspect-video overflow-hidden">
                <Image
                    src={project.imageSrc}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Subtle bottom fade for seamless blend */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#161b22] via-transparent to-transparent opacity-60" />

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

            {/* Bottom: Content Section - Auto Growth */}
            <div className="flex flex-col flex-1 p-5 md:p-6 relative z-10">
                <div className="space-y-4 mb-6">
                    {/* Micro-Label: Industry Tag */}
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-400 block">
                        {project.tag}
                    </span>

                    {/* Project Name and Metric */}
                    <div>
                        <h3 className="text-sm font-medium text-slate-400 group-hover:text-slate-300 transition-colors mb-1">
                            {project.title}
                        </h3>
                        <p className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight leading-[1.1]">
                            {project.metric}
                        </p>
                    </div>

                    {/* Hook Description */}
                    <p className="text-slate-500 text-sm md:text-base leading-relaxed line-clamp-1">
                        {project.hook}
                    </p>
                </div>

                {/* Tech Stack Icons - Minimalist Footer */}
                <div className="mt-auto flex flex-wrap gap-4 pt-4 border-t border-white/5">
                    {project.stack.map((tech) => {
                        const Icon = TECH_ICONS[tech];
                        return (
                            <div
                                key={tech}
                                title={tech}
                                className="text-slate-400 hover:text-white transition-colors"
                            >
                                {Icon && <Icon className="w-5 h-5" />}
                            </div>
                        );
                    })}
                </div>
            </div>
        </motion.article>
    );
}
