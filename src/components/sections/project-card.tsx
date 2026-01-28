"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Github, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
    project: Project;
    isReversed?: boolean;
}

export function ProjectCard({ project, isReversed = false }: ProjectCardProps) {
    return (
        <article
            className="group grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 py-12"
        >
            {/* Image Column - Glass Panel Container */}
            <div className={cn(
                "relative h-64 md:h-[400px] w-full rounded-md overflow-hidden border border-slate-800 bg-slate-900/50 transition-all duration-500",
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

            {/* Content Column - Centered Vertically */}
            <div className="flex flex-col justify-center md:col-span-5 relative z-10 space-y-6 md:h-[400px]">

                {/* Header */}
                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        <div className="h-px w-8 bg-primary/50" />
                        <p className="text-xs font-mono font-bold text-primary tracking-widest uppercase">
                            {project.category}
                        </p>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-100 tracking-tight leading-none">
                        {project.title}
                    </h3>
                </div>

                {/* Executive Summary */}
                <p className="text-slate-400 text-base leading-relaxed font-sans">
                    {project.description}
                </p>

                {/* ROI Metric - The "Premium" Hook */}
                <div className="border-l-2 border-primary pl-4 py-1">
                    <p className="text-slate-200 font-medium italic">
                        &quot;{project.metric}&quot;
                    </p>
                </div>

                {/* Action Area & Tech Footer */}
                <div className="pt-4 flex flex-col gap-6">
                    {/* Primary CTA */}
                    {project.demoUrl && (
                        <div>
                            <Button asChild className="bg-transparent border border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white font-semibold rounded-sm px-8 transition-all duration-300">
                                <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                                    View Deployment
                                    <ArrowUpRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    )}

                    {/* Tech Stack & Code Link */}
                    <div className="flex items-center flex-wrap gap-3 pt-2 border-t border-slate-800/50">
                        {project.stack?.map((tech) => (
                            <span key={tech} className="text-xs font-mono font-medium text-slate-400 uppercase tracking-wider">
                                {tech}
                            </span>
                        ))}

                        {/* Divider */}
                        {project.repoUrl && (
                            <>
                                <span className="text-slate-700 mx-1">•</span>
                                <Link
                                    href={project.repoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-slate-400 hover:text-white transition-colors p-1"
                                    aria-label="View Source Code"
                                >
                                    <Github className="h-5 w-5" />
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </article>
    );
}
