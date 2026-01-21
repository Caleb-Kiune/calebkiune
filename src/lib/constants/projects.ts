import { Project } from "@/lib/types";

export const projects: Project[] = [
    {
        id: "happy-feet",
        title: "Happy Happy Feet",
        category: "E-Commerce Platform",
        image: "/projects/happy-feet.jpg",
        links: { demo: "#", repo: "https://github.com/calebkiune/happy-happy-feet" },
        businessSolution: "Built to replace slow, generic templates, this custom e-commerce platform prioritizes user experience and sales conversion. It features an instant-search product catalog, a streamlined mobile-first checkout process, and a responsive admin dashboard for real-time inventory management. The site loads in under 1 second.",
        technicalStack: "Full-stack T3 implementation (Next.js, tRPC, Tailwind). Leveraged Prisma with PostgreSQL for relational data (products/orders) while maintaining end-to-end type safety. Auth via NextAuth. Frontend uses TanStack Query for optimistic UI updates."
    },
    {
        id: "smart-quote",
        title: "SmartQuote Calculator",
        category: "FinTech / SaaS Tool",
        image: "/projects/calculator.jpg",
        links: { demo: "#", repo: "#" },
        businessSolution: "Insurance quoting is often slow and prone to human error. This tool digitizes that workflow, allowing users to generate accurate medical premium quotes in seconds based on age and risk factors. Transforms a 15-minute manual task into a 3-step digital process.",
        technicalStack: "Built with Zod for rigorous runtime validation of user inputs (age brackets, policy limits) to prevent server-side calculation errors. Pricing engine uses TypeScript logic on the backend via tRPC procedures to ensure business rules remain secure and hidden."
    }
];
