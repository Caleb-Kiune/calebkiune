"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCard } from "@/components/sections/project-card";
import { projects } from "@/lib/constants/projects";

export function SelectedWork() {
    return (
        <section id="work" className="container mx-auto px-6 max-w-7xl py-16 md:py-24">
            <SectionHeading
                title="Selected Work"
                subtitle="Real-world solutions delivering tangible business results."
                className="mb-16 md:mb-32"
            />
            {/* Massive vertical stack with Zig-Zag logic */}
            <div className="flex flex-col gap-24 md:gap-32">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        isReversed={index % 2 !== 0}
                    />
                ))}
            </div>
        </section>
    );
}
