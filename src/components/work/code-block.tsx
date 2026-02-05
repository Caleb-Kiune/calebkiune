import { cn } from "@/lib/utils";

interface CodeBlockProps {
    title: string;
    language: string;
    code: string;
    className?: string;
}

export function CodeBlock({ title, language, code, className }: CodeBlockProps) {
    return (
        <div className={cn("glass-panel rounded-lg overflow-hidden", className)}>
            <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-white/5">
                <span className="text-sm font-mono text-muted">{title}</span>
                <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/20" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/20" />
                </div>
            </div>
            <div className="p-4 overflow-x-auto">
                <pre className="text-sm font-mono text-emerald-100/90 leading-relaxed">
                    <code>{code}</code>
                </pre>
            </div>
            <div className="px-4 py-2 border-t border-white/5 bg-white/5 flex justify-end">
                <span className="text-xs uppercase tracking-wider font-semibold text-white/20">
                    {language}
                </span>
            </div>
        </div>
    );
}
