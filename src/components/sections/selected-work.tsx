"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCard } from "@/components/sections/project-card";
import { projects } from "@/lib/constants/projects";
import { motion } from "framer-motion";

export function SelectedWork() {
    return (
        <section id="work" className="container mx-auto px-6 max-w-7xl py-16 md:py-24">
            <SectionHeading
                title="Selected Work"
                subtitle="Real-world solutions delivering tangible business results."
                className="mb-16 md:mb-32"
            />
            {/* Uniform Grid Layout */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                    hidden: { opacity: 0 },
                    show: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.15
                        }
                    }
                }}
            >
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                    // Uniform cards: No special col-span classes
                    />
                ))}
            </motion.div>
        </section>
    );
}
