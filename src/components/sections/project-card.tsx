"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/lib/types';
import { ArrowUpRight, Github } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { MouseEvent } from 'react';

interface ProjectCardProps {
    project: Project;
    className?: string;
    isReversed?: boolean; // Deprecated but kept for type safety if needed temporarily
}

export function ProjectCard({ project, className }: ProjectCardProps) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            onMouseMove={handleMouseMove}
            className={cn(
                "group relative flex flex-col overflow-hidden rounded-3xl bg-surface-50 border border-surface-100/50 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5",
                className
            )}
        >
            {/* Spotlight Overlay */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                          650px circle at ${mouseX}px ${mouseY}px,
                          rgba(94, 106, 210, 0.15),
                          transparent 80%
                        )
                    `,
                }}
            />
            {/* Spotlight Border */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100 z-10"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                          650px circle at ${mouseX}px ${mouseY}px,
                          rgba(94, 106, 210, 0.4),
                          transparent 80%
                        )
                    `,
                    maskImage: useMotionTemplate`
                        radial-gradient(
                          2px circle at ${mouseX}px ${mouseY}px,
                          rgba(0,0,0,1),
                          transparent 100%
                        )
                    `,
                    WebkitMaskImage: useMotionTemplate`
                         radial-gradient(
                          2px circle at ${mouseX}px ${mouseY}px,
                          rgba(0,0,0,1),
                          transparent 100%
                        )
                    `
                    // Simplified border approach: using the background above as the "glow" is often better than a masked border for this specific look
                    // but let's stick to the overlay glow which is closer to Linear's "surface" feel.
                    // Actually, let's keep the overlay simple.
                }}
            />


            {/* Image Container - Full width top (or full background for featured items if we wanted, but sticking to split for clarity) */}
            <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-900/50">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-60" />

                {/* Floating Category Badge */}
                <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 rounded-full bg-black/40 border border-white/10 backdrop-blur-md text-[10px] font-mono uppercase tracking-widest text-primary font-bold">
                        {project.category}
                    </span>
                </div>
            </div>

            {/* Content Container */}
            <div className="flex flex-col flex-1 p-6 md:p-8 space-y-5 relative z-20">

                {/* Header */}
                <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                        {project.title}
                    </h3>
                    <p className="text-sm text-slate-400 line-clamp-3 leading-relaxed">
                        {project.description}
                    </p>
                </div>

                {/* ROI Metric Badge - The "Hook" */}
                <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                    <svg className="w-3 h-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    {project.metric}
                </div>

                {/* Footer: Stack & Actions */}
                <div className="mt-auto pt-6 flex items-center justify-between border-t border-white/5">
                    {/* Tech Stack */}
                    <div className="flex items-center -space-x-2">
                        {/* We show icons or just simplified text. For now, text circles. */}
                        {project.stack.slice(0, 3).map((tech, i) => (
                            <div key={tech} className="h-6 px-2 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-[10px] text-slate-300 z-10" style={{ zIndex: 10 - i }}>
                                {tech}
                            </div>
                        ))}
                        {project.stack.length > 3 && (
                            <div className="h-6 px-2 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-[10px] text-slate-400 z-0">
                                +{project.stack.length - 3}
                            </div>
                        )}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-3">
                        {project.repoUrl && (
                            <Link
                                href={project.repoUrl}
                                target="_blank"
                                className="p-2 text-slate-500 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                            >
                                <Github className="w-4 h-4" />
                            </Link>
                        )}
                        {project.demoUrl && (
                            <Link
                                href={project.demoUrl}
                                target="_blank"
                                className="p-2 text-slate-500 hover:text-primary hover:bg-primary/10 rounded-full transition-colors"
                            >
                                <ArrowUpRight className="w-4 h-4" />
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </motion.article>
    );
}
