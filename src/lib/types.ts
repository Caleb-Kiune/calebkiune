export interface Project {
    id: string;
    title: string;
    category: string;
    image: string;
    links: {
        demo?: string;
        repo?: string;
    };
    businessSolution: string;
    technicalStack: string;
}

export type IconName = "Smartphone" | "Code" | "Zap" | "TrendingUp" | "Rocket" | "Layout" | "Server" | "Database" | "Globe";

export interface Service {
    title: string;
    description: string;
    icon?: IconName;
}
