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

// Scroll-linked reveal variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1] as const, // easeOutExpo bezier
        },
    },
};

export function SelectedWork() {
    return (
        <section id="work" className="py-section md:py-section-lg bg-slate-950">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    <motion.div variants={itemVariants}>
                        <SectionHeading
                            title="Selected Work"
                            subtitle="Real-world solutions delivering tangible business results."
                            className="mb-16 md:mb-20"
                        />
                    </motion.div>

                    {/* Asymmetric Editorial Bento Grid */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                        variants={containerVariants}
                    >
                        {PROJECTS.map((project, index) => (
                            <motion.div
                                key={project.id}
                                variants={itemVariants}
                                // First project spans 2 columns on large screens
                                className={
                                    index === 0
                                        ? "lg:col-span-2"
                                        : ""
                                }
                            >
                                <ProjectCard
                                    project={project}
                                    featured={index === 0}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
