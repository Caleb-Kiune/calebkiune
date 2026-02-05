import Link from "next/link";
import Image from "next/image";
import { ProjectCaseStudy } from "@/lib/types/project";
import { ArrowUpRight, Github, ArrowLeft, Layers, Calendar, User, Building2, Cpu, CheckSquare } from "lucide-react";
import { cn } from "@/lib/utils";

interface CaseStudyLayoutProps {
    project: ProjectCaseStudy;
}

export function CaseStudyLayout({ project }: CaseStudyLayoutProps) {
    return (
        <article className="min-h-screen bg-page pb-12 relative overflow-x-hidden">
            <div className="bg-noise fixed inset-0 z-0 pointer-events-none" />

            {/* Compact Header Bar */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-page/80 backdrop-blur-md border-b border-white/5 h-16 flex items-center">
                <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <Link
                            href="/#work"
                            className="text-muted hover:text-white transition-colors"
                            title="Back to Work"
                        >
                            <ArrowLeft className="w-5 h-5" />
                        </Link>
                        <h1 className="text-xl md:text-2xl font-display font-bold text-white tracking-tight truncate">
                            {project.title}
                        </h1>
                        <span className="hidden md:inline-block h-4 w-[1px] bg-white/10" />
                        <p className="hidden md:inline-block text-sm text-muted">{project.subtitle}</p>
                    </div>

                    <div className="flex items-center gap-3">
                        {project.repoUrl && (
                            <a
                                href={project.repoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 text-muted hover:text-white hover:bg-white/5 rounded-button transition-all"
                                title="View Source Code"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                        )}
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-emerald-400 text-white text-sm font-medium rounded-button transition-all shadow-[0_0_15px_rgba(16,185,129,0.15)]"
                            >
                                Live Site
                                <ArrowUpRight className="w-4 h-4" />
                            </a>
                        )}
                    </div>
                </div>
            </header>

            {/* Main Dashboard Grid */}
            <main className="container mx-auto px-6 max-w-7xl pt-24 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

                    {/* Left Sidebar (col-span-4) */}
                    <aside className="lg:col-span-4 space-y-6">
                        {/* Project Preview */}
                        <div className="relative aspect-video w-full rounded-md overflow-hidden border border-white/10 shadow-lg glass-panel">
                            <Image
                                src={project.heroImage}
                                alt={project.title}
                                fill
                                className="object-cover"
                                priority
                                placeholder="blur"
                                sizes="(max-width: 1024px) 100vw, 33vw"
                            />
                        </div>

                        {/* Project DNA (Vertical Impact Grid) */}
                        <div className="glass-panel p-4 rounded-card space-y-5 border border-white/5">
                            <div className="flex items-start gap-3">
                                <Building2 className="w-4 h-4 text-muted mt-0.5" />
                                <div>
                                    <dt className="text-xs text-muted uppercase tracking-wider mb-1">Client</dt>
                                    <dd className="text-sm text-white font-medium leading-tight">{project.client}</dd>
                                </div>
                            </div>
                            <div className="h-[1px] bg-white/5 w-full" />

                            <div className="flex items-start gap-3">
                                <User className="w-4 h-4 text-muted mt-0.5" />
                                <div>
                                    <dt className="text-xs text-muted uppercase tracking-wider mb-1">Role</dt>
                                    <dd className="text-sm text-white font-medium leading-tight">{project.role}</dd>
                                </div>
                            </div>
                            <div className="h-[1px] bg-white/5 w-full" />

                            <div className="flex items-start gap-3">
                                <Calendar className="w-4 h-4 text-muted mt-0.5" />
                                <div>
                                    <dt className="text-xs text-muted uppercase tracking-wider mb-1">Timeline</dt>
                                    <dd className="text-sm text-white font-medium leading-tight">{project.timeline}</dd>
                                </div>
                            </div>
                            <div className="h-[1px] bg-white/5 w-full" />

                            <div className="flex items-start gap-3">
                                <Layers className="w-4 h-4 text-muted mt-0.5" />
                                <div className="w-full">
                                    <dt className="text-xs text-muted uppercase tracking-wider mb-2">Tech Stack</dt>
                                    <dd className="flex flex-wrap gap-1.5">
                                        {project.stack.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-2 py-1 bg-white/5 border border-white/10 rounded-sm text-[11px] text-emerald-100/90 font-medium"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </dd>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Right Content Area (col-span-8) */}
                    <div className="lg:col-span-8 space-y-6">

                        {/* Metrics Row (Compact) */}
                        {project.metrics && project.metrics.length > 0 && (
                            <div className="grid grid-cols-3 gap-4">
                                {project.metrics.map((metric, idx) => (
                                    <div key={idx} className="glass-panel p-4 rounded-md border border-white/5 bg-surface/30">
                                        <dt className="text-xs text-muted font-medium mb-1">{metric.label}</dt>
                                        <dd className="text-xl font-display font-bold text-white">{metric.value}</dd>
                                        <span className="text-[10px] text-white/40 block mt-0.5 truncate">{metric.description}</span>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Narrative Grid (Side-by-Side) */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Challenge */}
                            <div className="glass-panel p-5 rounded-card border border-white/5">
                                <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-4 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-primary/20 ring-1 ring-primary" />
                                    The Challenge
                                </h3>
                                <div className="space-y-3 text-sm text-muted leading-relaxed">
                                    {project.challenge.map((p, i) => (
                                        <p key={i}>{p}</p>
                                    ))}
                                </div>
                            </div>

                            {/* Solution */}
                            <div className="glass-panel p-5 rounded-card border border-white/5">
                                <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-4 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-emerald-400/20 ring-1 ring-emerald-400" />
                                    The Solution
                                </h3>
                                <div className="space-y-3 text-sm text-muted leading-relaxed">
                                    {project.solution.map((p, i) => (
                                        <p key={i}>{p}</p>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Technical Highlights (Horizontal Feature List) */}
                        <div className="glass-panel p-5 rounded-card border border-white/5">
                            <div className="flex items-center gap-3 mb-4">
                                <Cpu className="w-4 h-4 text-primary" />
                                <h3 className="text-sm font-bold text-white uppercase tracking-wider">Technical Highlights</h3>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {project.technicalHighlights.map((point, index) => (
                                    <div key={index} className="flex gap-3 items-start p-3 rounded-md bg-white/5 border border-white/5">
                                        <CheckSquare className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                        <p className="text-xs text-muted leading-relaxed font-medium">
                                            {point}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </article>
    );
}
