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
    // Removed 'hook' property as requested
    // hook: string; 
    metric: string;
    stack: string[];
    imageSrc: string | StaticImageData;
    demoUrl?: string;
}

interface ProjectCardProps {
    project: ProjectData;
}

// Memoized animation constants (prevents object recreation on re-render)
const HOVER_LIFT = { y: -5 };
const EASE_OUT_TRANSITION = { duration: 0.3, ease: "easeOut" as const };

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <motion.article
            whileHover={HOVER_LIFT}
            transition={EASE_OUT_TRANSITION}
            // Added hover:border-white/20 per request
            className="group relative flex flex-col h-full overflow-hidden rounded-card bg-surface border border-slate-800 hover:border-white/20 transition-all duration-300 shadow-2xl shadow-black/40"
        >
            {/* Top: Image Section - Clean, No Overlay Buttons */}
            <div className="relative w-full aspect-video overflow-hidden bg-slate-900 border-b border-white/5">
                <Image
                    src={project.imageSrc}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-surface/80 via-transparent to-transparent opacity-60" />

                {/* Full Card Clickable Link (Optional UX enhancement) */}
                {project.demoUrl && (
                    <Link
                        href={project.demoUrl}
                        target="_blank"
                        className="absolute inset-0 z-10"
                        aria-label={`View ${project.title}`}
                    />
                )}
            </div>

            {/* Bottom: Content Section */}
            {/* Reduced padding from p-5/p-6 to p-4/p-5 */}
            <div className="flex flex-col flex-1 p-4 md:p-5 relative z-20 pointer-events-none">
                {/* Note: pointer-events-none allows clicks to pass through to the image link 
                    BUT we need to re-enable pointer-events for interactive elements like the button below */}

                {/* Reduced space-y from 4 to 2 to tighten layout further after hook removal */}
                <div className="space-y-2 mb-4">
                    {/* Micro-Label: Minimalist Tag - No Background */}
                    <span className="inline-block text-primary text-[10px] font-bold tracking-widest uppercase">
                        {project.tag}
                    </span>

                    {/* Project Name and Metric */}
                    <div>
                        <h3 className="text-sm font-medium text-slate-400 group-hover:text-slate-300 transition-colors mb-1">
                            {project.title}
                        </h3>
                        {/* Metric Typography - Updated with Gradient */}
                        <p className="font-display font-bold text-2xl md:text-3xl tracking-tight leading-[1.1] text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                            {project.metric}
                        </p>
                    </div>

                    {/* Hook Description REMOVED as requested */}
                </div>

                {/* Footer Split: Icons Left | Action Button Right */}
                {/* Reduced pt-4 to pt-3 */}
                <div className="mt-auto pt-3 border-t border-white/5 flex items-center justify-between gap-4 pointer-events-auto">

                    {/* Left: Tech Stack Icons */}
                    <div className="flex items-center gap-3">
                        {project.stack.map((tech) => {
                            const Icon = TECH_ICONS[tech];
                            return (
                                <div
                                    key={tech}
                                    title={tech}
                                    className="text-slate-500 hover:text-primary transition-colors"
                                >
                                    {Icon && <Icon className="w-4 h-4" />}
                                </div>
                            );
                        })}
                    </div>

                    {/* Right: Visit Action Button - Ghost Link Style */}
                    {project.demoUrl && (
                        <Link
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/link flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider hover:text-primary transition-colors"
                        >
                            View Project
                            <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                        </Link>
                    )}
                </div>
            </div>
        </motion.article>
    );
}