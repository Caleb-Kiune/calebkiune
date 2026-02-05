import Link from "next/link";
import Image from "next/image";
import { ProjectCaseStudy } from "@/lib/types/project";
import { ProjectMetrics } from "@/components/work/project-metrics";
import { CodeBlock } from "@/components/work/code-block";
import { ArrowUpRight, Github, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

interface CaseStudyLayoutProps {
    project: ProjectCaseStudy;
}

export function CaseStudyLayout({ project }: CaseStudyLayoutProps) {
    return (
        <article className="min-h-screen pb-24 relative overflow-hidden">
            {/* Background Texture */}
            <div className="bg-noise fixed inset-0 z-0 pointer-events-none" />

            {/* Hero Section */}
            <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-6">
                <div className="container mx-auto max-w-6xl relative z-10">
                    <Link
                        href="/#work"
                        className="inline-flex items-center text-sm text-muted hover:text-white transition-colors mb-8 group"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to Work
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-16">
                        <div>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-[0.9] tracking-tight">
                                {project.title}
                            </h1>
                            <p className="text-xl md:text-2xl text-muted font-light leading-relaxed max-w-xl">
                                {project.subtitle}
                            </p>
                        </div>

                        <div className="flex flex-col gap-4 items-start lg:items-end">
                            {/* Actions */}
                            <div className="flex flex-wrap gap-4">
                                {project.liveUrl && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center px-6 py-3 bg-primary hover:bg-emerald-400 text-white rounded-button font-medium transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(16,185,129,0.2)]"
                                    >
                                        Visit Live Site
                                        <ArrowUpRight className="w-4 h-4 ml-2" />
                                    </a>
                                )}
                                {project.repoUrl && (
                                    <a
                                        href={project.repoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center px-6 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-button font-medium transition-all"
                                    >
                                        <Github className="w-4 h-4 mr-2" />
                                        Source Code
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Hero Image */}
                    <div className="relative aspect-video w-full rounded-lg overflow-hidden border border-white/10 shadow-2xl glass-panel group">
                        <Image
                            src={project.heroImage}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            priority
                            placeholder="blur"
                        />
                    </div>
                </div>
            </section>

            {/* Main Content Grid */}
            <section className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Sidebar (Desktop) / Top Grid (Mobile) */}
                    <aside className="lg:col-span-4 order-2 lg:order-1">
                        <div className="glass-panel p-6 rounded-lg sticky top-32 space-y-8">
                            <div>
                                <dt className="text-sm text-muted uppercase tracking-wider mb-1">Client</dt>
                                <dd className="text-white font-medium">{project.client}</dd>
                            </div>
                            <div>
                                <dt className="text-sm text-muted uppercase tracking-wider mb-1">Role</dt>
                                <dd className="text-white font-medium">{project.role}</dd>
                            </div>
                            <div>
                                <dt className="text-sm text-muted uppercase tracking-wider mb-1">Timeline</dt>
                                <dd className="text-white font-medium">{project.timeline}</dd>
                            </div>
                            <div>
                                <dt className="text-sm text-muted uppercase tracking-wider mb-3">Tech Stack</dt>
                                <dd className="flex flex-wrap gap-2">
                                    {project.stack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 bg-white/5 border border-white/10 rounded-inner text-sm text-emerald-100/80"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </dd>
                            </div>
                        </div>
                    </aside>

                    {/* Deep Dive Content */}
                    <div className="lg:col-span-8 order-1 lg:order-2 space-y-20">

                        {/* Metrics */}
                        {project.metrics && project.metrics.length > 0 && (
                            <ProjectMetrics metrics={project.metrics} />
                        )}

                        {/* Change: Mapped Challenge Paragraphs */}
                        <div>
                            <h2 className="text-2xl font-display font-bold text-primary mb-6 flex items-center">
                                <span className="w-8 h-[1px] bg-primary mr-4" />
                                The Challenge
                            </h2>
                            <div className="prose prose-invert prose-lg text-muted/90 max-w-none">
                                {project.challenge.map((paragraph, index) => (
                                    <p key={index} className="mb-6 last:mb-0 leading-relaxed">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </div>

                        {/* Change: Mapped Solution Paragraphs */}
                        <div>
                            <h2 className="text-2xl font-display font-bold text-primary mb-6 flex items-center">
                                <span className="w-8 h-[1px] bg-primary mr-4" />
                                The Solution
                            </h2>
                            <div className="prose prose-invert prose-lg text-muted/90 max-w-none">
                                {project.solution.map((paragraph, index) => (
                                    <p key={index} className="mb-6 last:mb-0 leading-relaxed">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </div>

                        {/* Code Spotlight */}
                        {project.codeSnippet && (
                            <div className="mt-12">
                                <h3 className="text-lg font-medium text-white mb-4">Engineering Highlight</h3>
                                <CodeBlock
                                    title={project.codeSnippet.title}
                                    language={project.codeSnippet.language}
                                    code={project.codeSnippet.code}
                                />
                            </div>
                        )}

                        {/* Gallery (Simple Grid for now) */}
                        {/* Future improvement: Carousel */}
                    </div>
                </div>
            </section>
        </article>
    );
}
