import { Project } from "@/lib/types";
import ecoPlains from "@/assets/projects/eco-plains-safaris.png";
import kentab from "@/assets/projects/kentab-insurance-agency.png";
import happyFeet from "@/assets/projects/happy-happy-feet.png";

export const projects: Project[] = [
    {
        id: "eco-plains",
        title: "Eco Plains Safaris",
        category: "Travel & Tours Platform",
        image: ecoPlains,
        links: {
            demo: "https://eco-plains-safaris.vercel.app/",
            repo: "https://github.com/Caleb-Kiune/eco-plains-safaris"
        },
        businessValue: "Bridging the gap between luxury tourism and conservation. This platform replaces manual inquiry forms with an immersive digital showcase, helping Eco-Tour Operators capture high-end travelers seeking sustainable adventures in East Africa.",
        techValue: "Animation-rich React codebase delivering a premium feel. Optimized for visual storytelling with high-performance image delivery. Built to be responsive and accessible across all devices.",
        stack: ["React", "Tailwind CSS", "Framer Motion", "Vite"]
    },
    {
        id: "kentab",
        title: "Kentab Insurance Agency",
        category: "FinTech / InsurTech",
        image: kentab,
        links: {
            demo: "https://kentab-six.vercel.app/",
            repo: "https://github.com/Caleb-Kiune/kentab"
        },
        businessValue: "Digitizing the traditional broker workflow. Transforms a 20-minute phone call into a 3-minute self-service experience. Users can explore products, generate instant quotes, and initiate policies via a mobile-first interface designed for the Kenyan market.",
        techValue: "Next.js 14 with SSR for maximum SEO visibility. Features a Smart Quote Engine powered by Zod for rigorous runtime validation. Integrated with Nodemailer for instant real-time alerts to agents.",
        stack: ["Next.js 14", "TypeScript", "Zod", "Nodemailer", "Tailwind"]
    },
    {
        id: "happy-feet",
        title: "Happy Happy Feet",
        category: "E-Commerce Store",
        image: happyFeet,
        links: {
            demo: "https://happy-happy-feet.vercel.app/",
            repo: "https://github.com/Caleb-Kiune/Happy-Happy-Feet"
        },
        businessValue: "Reducing checkout friction for local shoppers. Features a unique 'WhatsApp Ordering System' that pre-fills order details into a chat message, closing the sale on the platform users trust most. Includes dynamic search and filtering.",
        techValue: "Cutting-edge T3 Stack: Next.js 16 (App Router), Tailwind CSS v4, and Shadcn/ui. Powered by Supabase for Database & Auth. Implements Global State management for the Cart and client-side optimistic updates.",
        stack: ["Next.js 16", "Supabase", "Shadcn/ui", "Tailwind v4", "Zustand"]
    }
];
