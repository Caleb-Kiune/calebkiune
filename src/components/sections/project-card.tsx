"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { TrendingUp, Code2, ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
    project: Project;
    isReversed?: boolean;
}

export function ProjectCard({ project, isReversed = false }: ProjectCardProps) {
    return (
        <article
            className="group grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center py-12"
        >
            {/* Image Column - Glass Panel Container */}
            <div className={cn(
                "relative h-64 md:h-[400px] w-full rounded-sm overflow-hidden border border-slate-800 bg-slate-900/50 transition-all duration-500",
                "md:col-span-7",
                isReversed ? "md:order-last" : "md:order-first"
            )}>
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                    sizes="(max-width: 768px) 100vw, 60vw"
                    priority={false}
                />
            </div>

            {/* Content Column */}
            <div className="flex flex-col md:col-span-5 relative z-10 space-y-8">

                {/* Header */}
                <div className="space-y-4">
                    <p className="text-xs font-mono font-bold text-primary tracking-widest uppercase mb-2">
                        {project.category}
                    </p>
                    <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-none">
                        {project.title}
                    </h3>

                    {/* Tech Stack Tags - Outlined & Mono */}
                    <div className="flex flex-wrap gap-2 pt-2">
                        {project.stack?.map((tech) => (
                            <span key={tech} className="px-2 py-1 text-[10px] font-mono font-medium text-primary/80 border border-primary/20 rounded-sm uppercase tracking-wider">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* The Visual Split: Gold vs Code */}
                <div className="space-y-6">

                    {/* Section A: Business Value (Gold/Sans) */}
                    <div className="pl-6 border-l-2 border-accent relative">
                        <div className="flex items-center gap-2 mb-2 text-accent font-semibold">
                            <TrendingUp className="h-4 w-4" />
                            <span className="text-xs uppercase tracking-wider">Business Impact</span>
                        </div>
                        <p className="text-slate-300 text-base leading-relaxed font-sans">
                            {project.businessValue}
                        </p>
                    </div>

                    {/* Section B: Under the Hood (Teal/Mono) */}
                    <div className="pl-6 border-l-2 border-primary/30 relative">
                        <div className="flex items-center gap-2 mb-2 text-primary font-semibold">
                            <Code2 className="h-4 w-4" />
                            <span className="text-xs uppercase tracking-wider">Under The Hood</span>
                        </div>
                        <p className="text-slate-400 text-xs leading-relaxed font-mono">
                            {project.techValue}
                        </p>
                    </div>
                </div>

                {/* Action Area */}
                <div className="flex gap-4 pt-2">
                    {project.links.demo && (
                        <Button asChild size="lg" className="h-12 bg-white text-slate-900 hover:bg-slate-200 transition-all font-semibold rounded-sm">
                            <Link href={project.links.demo} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="mr-2 h-4 w-4" />
                                Visit Live
                            </Link>
                        </Button>
                    )}
                    {project.links.repo && (
                        <Button asChild variant="outline" size="lg" className="h-12 border-slate-700 text-slate-400 hover:bg-slate-900 hover:text-white rounded-sm font-mono text-sm">
                            <Link href={project.links.repo} target="_blank" rel="noopener noreferrer">
                                <Github className="mr-2 h-4 w-4" />
                                Review Code
                            </Link>
                        </Button>
                    )}
                </div>
            </div>
        </article>
    );
}
