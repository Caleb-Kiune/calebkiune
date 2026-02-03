"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
    SiReact,
    SiTailwindcss,
    SiNextdotjs,
    SiSupabase,
} from "react-icons/si";
import { motion } from "framer-motion";
import type { IconType } from "react-icons";

// Tech icon mapping
const TECH_ICONS: Record<string, IconType> = {
    React: SiReact,
    "React.js": SiReact,
    Tailwind: SiTailwindcss,
    "Tailwind CSS": SiTailwindcss,
    "Next.js": SiNextdotjs,
    "Next.js 14": SiNextdotjs,
    "Next.js 16": SiNextdotjs,
    Supabase: SiSupabase,
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
            className="group relative flex flex-col overflow-hidden rounded-2xl bg-[#161b22] border border-white/5 hover:border-white/10 transition-all duration-300"
        >
            {/* Subtle glow on hover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />

            {/* Top: Image Container */}
            <div className="relative aspect-video overflow-hidden">
                <Image
                    src={project.imageSrc}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Dark overlay for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#161b22] via-transparent to-black/20 opacity-60" />

                {/* Floating Tag Badge */}
                <div className="absolute top-3 left-3 z-20">
                    <span className="inline-block px-2.5 py-1 rounded-md bg-black/50 backdrop-blur-sm border border-white/10 text-[10px] font-medium uppercase tracking-wider text-slate-300">
                        {project.tag}
                    </span>
                </div>

                {/* External Link */}
                {project.demoUrl && (
                    <Link
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-3 right-3 z-20 p-2 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-slate-400 hover:text-white hover:bg-white/20 transition-colors"
                    >
                        <ArrowUpRight className="w-4 h-4" />
                    </Link>
                )}
            </div>

            {/* Bottom: Content Container */}
            <div className="relative z-10 flex flex-col flex-1 p-5 md:p-6 space-y-4">
                {/* Project Name */}
                <h3 className="text-sm font-medium text-slate-400 group-hover:text-slate-300 transition-colors">
                    {project.title}
                </h3>

                {/* The Metric (Hero) */}
                <p className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight">
                    {project.metric}
                </p>

                {/* Hook Description */}
                <p className="text-sm text-slate-500 leading-relaxed flex-1">
                    {project.hook}
                </p>

                {/* Tech Stack Icons */}
                <div className="flex items-center gap-2 pt-3 border-t border-white/5">
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
