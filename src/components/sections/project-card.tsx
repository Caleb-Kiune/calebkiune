"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export interface ProjectData {
  id: string;
  title: string;
  tag: string;
  metric: string;
  stack: string[];
  imageSrc: string | StaticImageData;
  slug: string;
  liveUrl?: string;
}

interface ProjectCardProps {
  project: ProjectData;
}



export function ProjectCard({ project }: ProjectCardProps) {
  // Take top 3 tech items for the preview
  const techPreview = project.stack.slice(0, 3);

  return (
    <article
      className="group relative flex flex-col h-full overflow-hidden rounded-card bg-surface border border-slate-800 hover:border-slate-700 hover:-translate-y-0.5 transition-all duration-300 shadow-2xl shadow-black/40"
    >
      {/* PRIMARY LINK - COVERS CARD (z-10) */}
      <Link
        href={`/work/${project.slug}`}
        className="absolute inset-0 z-10"
        aria-label={`View Case Study for ${project.title}`}
        prefetch={true}
      />

      {/* Top: Image Section */}
      <div className="relative w-full aspect-video overflow-hidden bg-slate-900 border-b border-white/5">
        <Image
          src={project.imageSrc}
          alt={project.title}
          fill
          loading="lazy"
          decoding="async"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:blur-[2px] group-hover:brightness-50"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Desktop Hover Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 text-center z-0 pointer-events-none">
          <span className="px-4 py-2 bg-surface border border-slate-700 rounded-full text-white text-xs font-medium mb-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            Read Case Study
          </span>
          <div className="flex flex-wrap justify-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
            {techPreview.map(t => (
              <span key={t} className="text-[10px] text-slate-300 uppercase tracking-wider font-medium">{t} •</span>
            ))}
          </div>
        </div>

        {/* Base Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-surface/80 via-transparent to-transparent opacity-60 group-hover:opacity-0 transition-opacity" />

        {/* SECONDARY ACTION - EXTERNAL LINK (z-20) */}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-3 right-3 z-20 p-2 bg-surface hover:bg-primary text-white rounded-full border border-slate-700 transition-colors pointer-events-auto"
            onClick={(e) => e.stopPropagation()}
            title="Visit Live Site"
          >
            <ArrowUpRight className="w-4 h-4" />
          </a>
        )}
      </div>

      {/* Bottom: Content Section */}
      <div className="flex flex-col flex-1 p-4 md:p-5 relative z-0 bg-surface">
        <div className="space-y-3 mb-2">
          <span className="inline-block text-primary text-[10px] font-bold tracking-widest uppercase">
            {project.tag}
          </span>

          <div>
            <h3 className="text-xl font-display font-bold text-white group-hover:text-primary transition-colors mb-1">
              {project.title}
            </h3>

            {/* Mobile Tech Chips (Visible by default, hidden on hover/desktop concepts conceptually, but simpler to just show) */}
            <div className="flex flex-wrap gap-2 mt-2">
              {techPreview.map((tech) => (
                <span key={tech} className="text-[10px] text-slate-400 bg-white/5 px-1.5 py-0.5 rounded border border-white/5">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <p className="text-sm text-slate-400 leading-relaxed line-clamp-2">
            {project.metric}
          </p>
        </div>

        {/* Footer: Simple Call to Action */}
        <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
          <span className="text-xs font-medium text-slate-500 group-hover:text-white transition-colors">
            View Case Study
          </span>
          <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-primary transition-all group-hover:translate-x-1" />
        </div>
      </div>
    </article>
  );
}