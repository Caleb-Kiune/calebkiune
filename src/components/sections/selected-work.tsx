"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCard, ProjectData } from "@/components/sections/project-card";
import { motion } from "framer-motion";

// Project images
import ecoPlains from "@/assets/projects/eco-plains-safaris.png";
import kentab from "@/assets/projects/kentab-insurance-agency.png";
import happyFeet from "@/assets/projects/happy-happy-feet.png";


const PROJECTS: ProjectData[] = [
    {
        id: "eco-plains",
        title: "Eco Plains Safaris",
        tag: "Conservation Tourism",
        metric: "Luxury Eco-Tourism",
        stack: ["React 19", "Framer Motion", "Lenis Scroll", "Cloudinary"],
        imageSrc: ecoPlains,
        demoUrl: "https://eco-plains-safaris.vercel.app",
    },
    {
        id: "kentab",
        title: "Kentab Insurance Agency",
        tag: "FinTech / InsurTech",
        metric: "Sub-Second Quotes",
        stack: ["Next.js 14", "TypeScript", "Zod", "Nodemailer"],
        imageSrc: kentab,
        demoUrl: "https://kentab-six.vercel.app",
    },
    {
        id: "happy-feet",
        title: "Happy Happy Feet",
        tag: "E-Commerce",
        metric: "Zero-Latency Search",
        stack: ["Next.js 16", "Supabase", "Tailwind v4", "Framer Motion"],
        imageSrc: happyFeet,
        demoUrl: "https://happy-happy-feet.vercel.app",
    },
];

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
            ease: [0.22, 1, 0.36, 1] as const,
        },
    },
};

export function SelectedWork() {
    return (
        <section id="work" className="py-section md:py-section-lg bg-page border-t border-slate-800">
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

                    {/* Uniform Grid - No Spanning */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                        variants={containerVariants}
                    >
                        {PROJECTS.map((project) => (
                            <motion.div
                                key={project.id}
                                variants={itemVariants}
                                className="col-span-1 h-full"
                            >
                                <ProjectCard project={project} />
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}