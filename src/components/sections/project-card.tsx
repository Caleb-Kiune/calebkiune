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
            className="group relative flex flex-col h-full overflow-hidden rounded-2xl bg-[#161b22] border border-white/5 hover:border-white/15 transition-all duration-300 shadow-2xl shadow-black/40"
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
                <div className="absolute inset-0 bg-gradient-to-t from-[#161b22]/80 via-transparent to-transparent opacity-60" />

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
            <div className="flex flex-col flex-1 p-5 md:p-6 relative z-20 pointer-events-none">
                {/* Note: pointer-events-none allows clicks to pass through to the image link 
                    BUT we need to re-enable pointer-events for interactive elements like the button below */}
                
                <div className="space-y-4 mb-6">
                    {/* Micro-Label: Industry Tag */}
                    <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 block">
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

                    {/* Hook Description (Clamped to 1 line) */}
                    <p className="text-slate-500 text-sm md:text-base leading-relaxed line-clamp-1">
                        {project.hook}
                    </p>
                </div>

                {/* Footer Split: Icons Left | Action Button Right */}
                <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between gap-4 pointer-events-auto">
                    
                    {/* Left: Tech Stack Icons */}
                    <div className="flex items-center gap-3">
                        {project.stack.map((tech) => {
                            const Icon = TECH_ICONS[tech];
                            return (
                                <div
                                    key={tech}
                                    title={tech}
                                    className="text-slate-500 hover:text-emerald-400 transition-colors"
                                >
                                    {Icon && <Icon className="w-5 h-5" />}
                                </div>
                            );
                        })}
                    </div>

                    {/* Right: Visit Action Button */}
                    {project.demoUrl && (
                        <Link
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/btn flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider"
                        >
                            Visit
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-black group-hover/btn:bg-emerald-400 group-hover/btn:scale-110 transition-all duration-300">
                                <ArrowUpRight className="w-4 h-4" />
                            </div>
                        </Link>
                    )}
                </div>
            </div>
        </motion.article>
    );
}