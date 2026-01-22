import { StaticImageData } from "next/image";

export interface Project {
    id: string;
    title: string;
    category: string;
    image: string | StaticImageData;
    links: {
        demo?: string;
        repo?: string;
    };
    businessValue: string;
    techValue: string;
    stack: string[];
}

export type IconName = "Smartphone" | "Code" | "Zap" | "TrendingUp" | "Rocket" | "Layout" | "Server" | "Database" | "Globe";

export interface Service {
    title: string;
    description: string;
    icon?: IconName;
}
