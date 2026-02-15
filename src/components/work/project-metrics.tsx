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
                    className="bg-surface rounded-card border border-slate-800 p-6 group hover:border-slate-700 transition-colors"
                >
                    <dt className="text-sm font-medium text-muted mb-1">{metric.label}</dt>
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
