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

// Tech icon mapping
const TECH_ICONS: Record<string, IconType | LucideIcon> = {
  React: SiReact,
  "React.js": SiReact,
  "React 19": SiReact,
  "Next.js": SiNextdotjs,
  "Next.js 14": SiNextdotjs,
  "Next.js 16": SiNextdotjs,
  Tailwind: SiTailwindcss,
  "Tailwind CSS": SiTailwindcss,
  "Tailwind v4": SiTailwindcss,
  Supabase: SiSupabase,
  "Framer Motion": SiFramer,
  TypeScript: SiTypescript,
  "Lenis Scroll": MousePointer2,
  Cloudinary: Cloud,
  Zod: ShieldCheck,
  Nodemailer: Mail,
};

export interface ProjectData {
  id: string;
  title: string;
  tag: string;
  metric: string;
  stack: string[];
  imageSrc: string | StaticImageData;
  slug: string;
}

interface ProjectCardProps {
  project: ProjectData;
}

const HOVER_LIFT = { y: -5 };
const EASE_OUT_TRANSITION = { duration: 0.3, ease: "easeOut" as const };

export function ProjectCard({ project }: ProjectCardProps) {
  const cardContent = (
    <motion.article
      whileHover={HOVER_LIFT}
      transition={EASE_OUT_TRANSITION}
      className="group relative flex flex-col h-full overflow-hidden rounded-card bg-surface border border-slate-800 hover:border-white/20 transition-all duration-300 shadow-2xl shadow-black/40 group"
    >
      {/* Top: Image Section */}
      <div className="relative w-full aspect-video overflow-hidden bg-slate-900 border-b border-white/5">
        <Image
          src={project.imageSrc}
          alt={project.title}
          fill
          loading="lazy"
          decoding="async"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-surface/80 via-transparent to-transparent opacity-60" />
      </div>

      {/* Bottom: Content Section */}
      <div className="flex flex-col flex-1 p-4 md:p-5 relative z-20">
        <div className="space-y-2 mb-4">
          <span className="inline-block text-primary text-[10px] font-bold tracking-widest uppercase">
            {project.tag}
          </span>

          <div>
            <h3 className="text-sm font-medium text-slate-400 group-hover:text-slate-300 transition-colors mb-1">
              {project.title}
            </h3>
            <p className="font-display font-bold text-2xl md:text-3xl tracking-tight leading-[1.1] text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
              {project.metric}
            </p>
          </div>
        </div>

        {/* Footer: Icons + Arrow */}
        <div className="mt-auto pt-3 border-t border-white/5 flex items-center justify-between gap-4">
          {/* Tech Stack Icons */}
          <div className="flex items-center gap-3">
            {project.stack.map((tech) => {
              const Icon = TECH_ICONS[tech];
              return Icon ? (
                <div
                  key={tech}
                  title={tech}
                  className="text-slate-500 hover:text-primary transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </div>
              ) : null;
            })}
          </div>

          {/* Arrow */}
          <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-primary transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </div>
      </div>
    </motion.article>
  );

  return (
    <Link
      href={`/work/${project.slug}`}
      className="block group"
      aria-label={`View Case Study for ${project.title}`}
    >
      {cardContent}
    </Link>
  );
}