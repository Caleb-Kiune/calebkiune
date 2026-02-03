"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCard, ProjectData } from "@/components/sections/project-card";
import { motion } from "framer-motion";

// Project images
import ecoPlains from "@/assets/projects/eco-plains-safaris.png";
import kentab from "@/assets/projects/kentab-insurance-agency.png";
import happyFeet from "@/assets/projects/happy-happy-feet.png";

// Curated project data - Engineering Truths from READMEs
const PROJECTS: ProjectData[] = [
    {
        id: "eco-plains",
        title: "Eco Plains Safaris",
        tag: "Conservation Tourism",
        hook: "Bridging the gap between luxury tourism and conservation.",
        metric: "Immersive Experience",
        stack: ["React 19", "Framer Motion", "Lenis Scroll", "Cloudinary"],
        imageSrc: ecoPlains,
        demoUrl: "https://eco-plains-safaris.vercel.app",
    },
    {
        id: "kentab",
        title: "Kentab Insurance Agency",
        tag: "FinTech / InsurTech",
        hook: "Digitizing manual workflows for real-time policy issuance.",
        metric: "Sub-Second Quotes",
        stack: ["Next.js 14", "TypeScript", "Zod", "Nodemailer"],
        imageSrc: kentab,
        demoUrl: "https://kentab.co.ke",
    },
    {
        id: "happy-feet",
        title: "Happy Happy Feet",
        tag: "E-Commerce",
        hook: "Seamless performance with zero-latency search.",
        metric: "WhatsApp-First Commerce",
        stack: ["Next.js 16", "Supabase", "Tailwind v4", "Framer Motion"],
        imageSrc: happyFeet,
        demoUrl: "https://happy-happy-feet.vercel.app",
    },
];

export function SelectedWork() {
    return (
        <section id="work" className="py-24 md:py-32 bg-slate-950">
            <div className="container mx-auto px-6 max-w-6xl">
                <SectionHeading
                    title="Selected Work"
                    subtitle="Real-world solutions delivering tangible business results."
                    className="mb-16"
                />

                {/* Bento Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        show: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.1,
                            },
                        },
                    }}
                >
                    {PROJECTS.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
