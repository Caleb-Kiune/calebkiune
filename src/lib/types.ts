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

export interface Service {
    title: string;
    description: string;
    icon?: string; // Optional icon name from Lucide
}
