import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCard, ProjectData } from "@/components/sections/project-card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

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

export function SelectedWork() {
    return (
        <section id="work" className="relative py-section md:py-section-lg bg-page border-t border-slate-800">
            <div className="bg-noise" aria-hidden="true" />
            <div className="container relative z-10 mx-auto px-6 max-w-6xl">
                <ScrollReveal>
                    <SectionHeading
                        title="Selected Work"
                        subtitle="Real-world solutions delivering tangible business results."
                        className="mb-16 md:mb-20"
                    />
                </ScrollReveal>

                {/* Uniform Grid - No Spanning */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {PROJECTS.map((project, index) => (
                        <ScrollReveal
                            key={project.id}
                            delay={100 + index * 100}
                            className="col-span-1 h-full"
                        >
                            <ProjectCard project={project} />
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}