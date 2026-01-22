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
        <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="group grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center"
        >
            {/* Image Column */}
            <div className={cn(
                "relative h-64 md:h-[400px] w-full rounded-2xl overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-500",
                "md:col-span-7", // Image takes 7 columns
                isReversed ? "md:order-last" : "md:order-first" // Zig-Zag Logic
            )}>
                <div className="absolute inset-0 bg-slate-100 flex items-center justify-center text-slate-400">
                    <span className="sr-only">Project Image</span>
                </div>
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    // Using object-cover as requested. If images are getting cut off, try object-contain with a bg-color.
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 60vw"
                    priority={false}
                />
            </div>

            {/* Content Column */}
            <div className="flex flex-col md:col-span-5 relative z-10">

                {/* Header */}
                <div className="mb-6">
                    <p className="text-sm font-bold text-indigo-600 mb-2 tracking-widest uppercase">{project.category}</p>
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight mb-4">{project.title}</h3>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.stack?.map((tech) => (
                            <span key={tech} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full border border-slate-200">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* The Dual Split Description */}
                <div className="space-y-6">

                    {/* Section A: Business Value */}
                    <div className="pl-4 border-l-2 border-emerald-500/50">
                        <div className="flex items-center gap-2 mb-2 text-slate-900 font-semibold">
                            <TrendingUp className="h-4 w-4 text-emerald-500" />
                            <span className="text-xs uppercase tracking-wider">Business Value</span>
                        </div>
                        <p className="text-slate-600 text-base leading-relaxed">
                            {project.businessValue}
                        </p>
                    </div>

                    {/* Section B: Tech Stack */}
                    <div className="pl-4 border-l-2 border-indigo-500/30">
                        <div className="flex items-center gap-2 mb-2 text-slate-700 font-semibold">
                            <Code2 className="h-4 w-4 text-indigo-500" />
                            <span className="text-xs uppercase tracking-wider">Under the Hood</span>
                        </div>
                        <p className="text-slate-500 text-sm leading-relaxed">
                            {project.techValue}
                        </p>
                    </div>
                </div>

                {/* Action Area */}
                <div className="mt-8 flex gap-4">
                    {project.links.demo && (
                        <Button asChild size="lg" className="bg-slate-900 text-white hover:bg-slate-800 shadow-lg shadow-indigo-500/10">
                            <Link href={project.links.demo} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="mr-2 h-4 w-4" />
                                Visit Live
                            </Link>
                        </Button>
                    )}
                    {project.links.repo && (
                        <Button asChild variant="outline" size="lg" className="border-slate-200 hover:bg-slate-50 text-slate-700">
                            <Link href={project.links.repo} target="_blank" rel="noopener noreferrer">
                                <Github className="mr-2 h-4 w-4" />
                                Code
                            </Link>
                        </Button>
                    )}
                </div>
            </div>
        </motion.article>
    );
}
