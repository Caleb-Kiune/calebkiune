import { ProjectCaseStudy } from "@/lib/types/project";
import ecoPlains from "@/assets/projects/eco-plains-safaris.png";
import kentab from "@/assets/projects/kentab-insurance-agency.png";
import happyFeet from "@/assets/projects/happy-happy-feet.png";

export const PROJECTS: ProjectCaseStudy[] = [
    {
        id: "eco-plains",
        slug: "eco-plains-safaris",
        title: "Eco Plains Safaris",
        tag: "Conservation Tourism",
        subtitle: "Luxury Eco-Tourism Platform",
        heroImage: ecoPlains,
        client: "Eco Plains Safaris Ltd.",
        role: "Full-Stack Developer",
        timeline: "2024",
        stack: ["React 19", "Framer Motion", "Lenis Scroll", "Cloudinary"],
        challenge: [
            "The client needed a digital presence that reflected their high-end, eco-conscious brand values while maintaining fast load times for image-heavy content.",
            "Existing solutions were either too generic or lacked the performance optimizations required for a seamless visual experience across devices."
        ],
        solution: [
            "Built a custom Next.js application with a focus on image optimization and smooth scroll interactions using Lenis.",
            "Implemented a dynamic booking inquiry system and integrated Cloudinary for efficient media delivery."
        ],
        metrics: [
            { label: "Performance", value: "98/100", description: "Lighthouse Performance Score" },
            { label: "Engagement", value: "+40%", description: "Increase in time on site" }
        ],
        gallery: [ecoPlains], // Placeholder, to be populated with more images
        liveUrl: "https://eco-plains-safaris.vercel.app",
        codeSnippet: {
            title: "Optimized Image Component",
            language: "tsx",
            code: `
export function ParallaxImage({ src, alt }: ImageProps) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  
  return (
    <motion.div style={{ y }} className="relative overflow-hidden">
        <Image src={src} alt={alt} fill className="object-cover" />
    </motion.div>
  );
}
      `.trim()
        }
    },
    {
        id: "kentab",
        slug: "kentab-insurance",
        title: "Kentab Insurance Agency",
        tag: "FinTech / InsurTech",
        subtitle: "FinTech / InsurTech Solution",
        heroImage: kentab,
        client: "Kentab Insurance",
        role: "Lead Developer",
        timeline: "2023",
        stack: ["Next.js 14", "TypeScript", "Zod", "Nodemailer"],
        challenge: [
            "The insurance quote process was manual, slow, and prone to errors, leading to lost leads and customer frustration.",
            "They needed a way to automate quote generation and streamline the customer onboarding flow without sacrificing data security."
        ],
        solution: [
            "Developed a secure, multi-step form with real-time validation custom Zod schemas.",
            "Automated email notifications and PDF quote generation, reducing turnaround time from hours to seconds."
        ],
        metrics: [
            { label: "Speed", value: "< 1s", description: "Quote Generation Time" },
            { label: "Conversion", value: "3x", description: "Increase in completed quotes" }
        ],
        gallery: [kentab],
        liveUrl: "https://kentab-six.vercel.app",
        codeSnippet: {
            title: "Quote Validation Schema",
            language: "typescript",
            code: `
export const QuoteSchema = z.object({
  vehicleValue: z.number().min(500000, "Minimum value is 500k"),
  coverType: z.enum(["comprehensive", "third-party"]),
  usage: z.enum(["private", "commercial"]),
  // Real-time premium calculation logic attached
});
      `.trim()
        }
    },
    {
        id: "happy-feet",
        slug: "happy-happy-feet",
        title: "Happy Happy Feet",
        tag: "E-Commerce",
        subtitle: "Modern E-Commerce Experience",
        heroImage: happyFeet,
        client: "Happy Happy Feet",
        role: "Frontend Architect",
        timeline: "2025",
        stack: ["Next.js 15", "Supabase", "Tailwind v4", "Framer Motion"],
        challenge: [
            "The client wanted to move away from a rigid generic platform to a custom solution that offered a unique, fluid shopping experience.",
            "The goal was to implement real-time inventory tracking and a blistering fast search interface."
        ],
        solution: [
            "Leveraged Supabase for real-time database capabilities and Next.js 15 for server-side rendering.",
            "Designed a custom search algorithm and implemented fluid page transitions using Framer Motion."
        ],
        metrics: [
            { label: "Latency", value: "50ms", description: "Average Search Response" },
            { label: "Uptime", value: "99.9%", description: "System Availability" }
        ],
        gallery: [happyFeet],
        liveUrl: "https://happy-happy-feet.vercel.app",
        codeSnippet: {
            title: "Real-time Inventory Subscription",
            language: "typescript",
            code: `
supabase
  .channel('inventory')
  .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'products' }, (payload) => {
    updateLocalInventory(payload.new);
  })
  .subscribe();
      `.trim()
        }
    }
];
