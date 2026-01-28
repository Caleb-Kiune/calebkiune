export interface SkillCategory {
    title: string;
    skills: string[];
}

export const SKILLS_DATA: SkillCategory[] = [
    {
        title: "Frontend Ecosystem",
        skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"]
    },
    {
        title: "Backend Infrastructure",
        skills: ["Supabase", "PostgreSQL", "Node.js", "Prisma", "Server Actions"]
    },
    {
        title: "Business & Tools",
        skills: ["WhatsApp Business API", "Global SEO", "Advanced Analytics", "Stripe Connect"]
    }
];
