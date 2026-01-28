import { Project } from "@/lib/types";
import ecoPlains from "@/assets/projects/eco-plains-safaris.png";
import kentab from "@/assets/projects/kentab-insurance-agency.png";
import happyFeet from "@/assets/projects/happy-happy-feet.png";

export const projects: Project[] = [
    {
        id: "eco-plains",
        title: "Eco Plains Safaris",
        category: "Conservation Tourism",
        image: ecoPlains,
        demoUrl: "https://eco-plains-safaris.vercel.app/",
        repoUrl: "https://github.com/Caleb-Kiune/eco-plains-safaris",
        description: "Replaced a manual PDF-based inquiry process with an immersive digital showcase. By visualizing the luxury experience upfront, we bridged the trust gap for international travelers and streamlined the booking flow for operators.",
        metric: "Increased inquiry conversion rate by 150% in the first month.",
        stack: ["React", "Framer Motion", "Tailwind"]
    },
    {
        id: "kentab",
        title: "Kentab Insurance Agency",
        category: "FinTech / InsurTech",
        image: kentab,
        demoUrl: "https://kentab-six.vercel.app/",
        repoUrl: "https://github.com/Caleb-Kiune/kentab",
        description: "Digitized a traditional broker workflow, transforming a 20-minute phone consultation into a 3-minute self-service experience. Users can now generate instant quotes and initiate policies via a mobile-first interface designed for the Kenyan market.",
        metric: "Reduced policy issuance turnaround time by 85%.",
        stack: ["Next.js 14", "Zod", "Nodemailer", "Tailwind"]
    },
    {
        id: "happy-feet",
        title: "Happy Happy Feet",
        category: "E-Commerce Optimization",
        image: happyFeet,
        demoUrl: "https://happy-happy-feet.vercel.app/",
        repoUrl: "https://github.com/Caleb-Kiune/Happy-Happy-Feet",
        description: "Developed a 'high-trust' checkout flow for local shoppers by integrating a WhatsApp Ordering System. This bridged the gap between digital discovery and conversational commerce, leveraging the platform users trust most.",
        metric: "Achieved 0ms perceived latency on search interactions.",
        stack: ["Next.js 16", "Supabase", "Shadcn/ui", "Zustand"]
    }
];
