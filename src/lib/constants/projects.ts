import { Project } from "@/lib/types";

export const projects: Project[] = [
    {
        id: "eco-plains",
        title: "Eco Plains Safaris",
        category: "Travel & Tours Platform",
        image: "/projects/eco-plains-safaris.png",
        links: {
            demo: "https://eco-plains-safaris.vercel.app/",
            repo: "https://github.com/Caleb-Kiune/eco-plains-safaris"
        },
        businessSolution: "Bridging the gap between luxury tourism and conservation. This platform replaces manual inquiry forms with an immersive digital showcase, helping Eco-Tour Operators capture high-end travelers seeking sustainable adventures in East Africa.",
        technicalStack: "Animation-rich React codebase delivering a premium feel. Optimized for visual storytelling with high-performance image delivery. Built to be responsive and accessible across all devices."
    },
    {
        id: "kentab",
        title: "Kentab Insurance Agency",
        category: "FinTech / InsurTech",
        image: "/projects/kentab-insurance-agency.png",
        links: {
            demo: "https://kentab-six.vercel.app/",
            repo: "https://github.com/Caleb-Kiune/kentab"
        },
        businessSolution: "Digitizing the traditional broker workflow. Transforms a 20-minute phone call into a 3-minute self-service experience. Users can explore products, generate instant quotes, and initiate policies via a mobile-first interface designed for the Kenyan market.",
        technicalStack: "Next.js 14 with SSR for maximum SEO visibility. Features a Smart Quote Engine powered by Zod for rigorous runtime validation. Integrated with Nodemailer for instant real-time alerts to agents."
    },
    {
        id: "happy-feet",
        title: "Happy Happy Feet",
        category: "E-Commerce Store",
        image: "/projects/happy-happy-feet.png",
        links: {
            demo: "https://happy-happy-feet.vercel.app/",
            repo: "https://github.com/Caleb-Kiune/Happy-Happy-Feet"
        },
        businessSolution: "Reducing checkout friction for local shoppers. Features a unique 'WhatsApp Ordering System' that pre-fills order details into a chat message, closing the sale on the platform users trust most. Includes dynamic search and filtering.",
        technicalStack: "Cutting-edge T3 Stack: Next.js 16 (App Router), Tailwind CSS v4, and Shadcn/ui. Powered by Supabase for Database & Auth. Implements Global State management for the Cart and client-side optimistic updates."
    }
];
