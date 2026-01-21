"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { TrendingUp, Code2, ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
    project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col rounded-lg border border-slate-200 overflow-hidden bg-card text-card-foreground shadow-sm"
        >
            {/* Image Section */}
            <div className="relative aspect-video w-full overflow-hidden">
                {/* Placeholder blur for now, assuming images might not exist yet or using color placeholder if failed */}
                <div className="absolute inset-0 bg-slate-100 flex items-center justify-center text-slate-400">
                    {/* Fallback if image fails to load or during dev */}
                    <span className="sr-only">Project Image</span>
                </div>
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>

            {/* Header */}
            <div className="p-6 pb-2">
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <h3 className="text-2xl font-bold leading-none tracking-tight">{project.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{project.category}</p>
                    </div>
                </div>
            </div>

            {/* Block A: Business Value */}
            <div className="bg-white p-6 pt-2 border-b border-slate-100">
                <div className="flex items-center gap-2 mb-2 text-primary font-semibold">
                    <TrendingUp className="h-4 w-4" />
                    <span className="text-sm uppercase tracking-wider">Business Value</span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                    {project.businessSolution}
                </p>
            </div>

            {/* Block B: Technical Stack */}
            <div className="bg-slate-100 p-6 flex-grow border-b border-slate-200">
                <div className="flex items-center gap-2 mb-2 text-slate-700 font-semibold">
                    <Code2 className="h-4 w-4" />
                    <span className="text-sm uppercase tracking-wider">Under the Hood</span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {project.technicalStack}
                </p>
            </div>

            {/* Action Area */}
            <div className="p-6 pt-4 bg-white mt-auto">
                <div className="flex gap-3">
                    {project.links.demo && (
                        <Button asChild className="flex-1 bg-primary hover:bg-primary/90">
                            <Link href={project.links.demo} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="mr-2 h-4 w-4" />
                                Live Demo
                            </Link>
                        </Button>
                    )}
                    {project.links.repo && (
                        <Button asChild variant="outline" className="flex-1">
                            <Link href={project.links.repo} target="_blank" rel="noopener noreferrer">
                                <Github className="mr-2 h-4 w-4" />
                                Source Code
                            </Link>
                        </Button>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
