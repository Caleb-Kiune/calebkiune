import { cn } from "@/lib/utils";

interface Metric {
    label: string;
    value: string;
    description?: string;
}

interface ProjectMetricsProps {
    metrics: Metric[];
    className?: string;
}

export function ProjectMetrics({ metrics, className }: ProjectMetricsProps) {
    return (
        <div className={cn("grid grid-cols-2 lg:grid-cols-4 gap-4", className)}>
            {metrics.map((metric, index) => (
                <div
                    key={index}
                    className="glass-panel p-5 rounded-lg flex flex-col justify-center relative group"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
                    <dt className="text-sm font-medium text-muted mb-1 relative z-10">{metric.label}</dt>
                    <dd className="text-2xl md:text-3xl font-display font-bold text-white relative z-10">
                        {metric.value}
                    </dd>
                    {metric.description && (
                        <span className="text-xs text-white/40 mt-1 relative z-10">{metric.description}</span>
                    )}
                </div>
            ))}
        </div>
    );
}
