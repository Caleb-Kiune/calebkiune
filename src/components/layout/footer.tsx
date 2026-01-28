import Link from "next/link";
import { Terminal } from "lucide-react";

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg role="img" viewBox="0 0 24 24" fill="currentColor" {...props} xmlns="http://www.w3.org/2000/svg">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.419-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
    );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg role="img" viewBox="0 0 24 24" fill="currentColor" {...props} xmlns="http://www.w3.org/2000/svg">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
    );
}

function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg role="img" viewBox="0 0 24 24" fill="currentColor" {...props} xmlns="http://www.w3.org/2000/svg">
            <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
        </svg>
    );
}

function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            {...props}
        >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
    );
}

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 pt-16 pb-12">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20 mb-16">

                    {/* Col 1: Brand & Identity */}
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <h3 className="text-white font-bold tracking-tight text-xl">CALEB KIUNE</h3>
                            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
                                Building <span className="text-slate-300">high-ROI systems</span> for Kenya&apos;s forward-thinking businesses.
                            </p>
                        </div>

                        {/* Status Indicator */}
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/30 border border-emerald-900/50 text-emerald-400 text-xs font-mono font-medium tracking-wide w-fit">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            <span>System Online</span>
                        </div>
                    </div>

                    {/* Col 2: Navigation Hub */}
                    <div>
                        <h4 className="text-white font-mono text-xs font-bold uppercase tracking-widest mb-6">Explore</h4>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="#work" className="hover:text-primary transition-colors block py-0.5">Selected Work</Link></li>
                            <li><Link href="#about" className="hover:text-primary transition-colors block py-0.5">About & Story</Link></li>
                            <li><Link href="#skills" className="hover:text-primary transition-colors block py-0.5">Technical Expertise</Link></li>
                            <li><Link href="#testimonials" className="hover:text-primary transition-colors block py-0.5">Client Reviews</Link></li>
                        </ul>
                    </div>

                    {/* Col 3: Trust & Legal */}
                    <div>
                        <h4 className="text-white font-mono text-xs font-bold uppercase tracking-widest mb-6">Connect</h4>

                        {/* Social Matrix */}
                        <div className="flex items-center gap-3 mb-8">
                            {[
                                { icon: GithubIcon, href: "https://github.com/Caleb-Kiune", label: "GitHub" },
                                { icon: LinkedinIcon, href: "https://www.linkedin.com/in/caleb-kiune-b356a6327/", label: "LinkedIn" },
                                { icon: TwitterIcon, href: "https://x.com/calebkiune", label: "X / Twitter" },
                                { icon: WhatsAppIcon, href: "https://wa.me/254705774171", label: "WhatsApp" }
                            ].map((social) => (
                                <Link
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    className="h-10 w-10 flex items-center justify-center rounded-sm bg-slate-900 border border-slate-800 text-slate-400 hover:bg-slate-800 hover:text-white hover:border-slate-700 transition-all"
                                    aria-label={social.label}
                                >
                                    <social.icon className="h-5 w-5" />
                                </Link>
                            ))}
                        </div>

                        {/* Compliance Badge */}
                        <div className="p-4 rounded-sm bg-slate-900/50 border border-slate-800/50">
                            <div className="flex items-start gap-3">
                                <div className="mt-0.5 h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" />
                                <div className="space-y-1">
                                    <p className="text-xs font-medium text-slate-300">Data Privacy Compliant</p>
                                    <p className="text-[10px] text-slate-500 leading-snug">
                                        Operations aligned with the <strong className="text-slate-400 font-medium">Kenya Data Protection Act (2019)</strong>.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sub-Footer */}
                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
                    <p>© {currentYear} Kiune Technologies. All rights reserved.</p>
                    <p className="font-mono">Nairobi, KE • <span className="text-slate-500">UTC+3</span></p>
                </div>
            </div>
        </footer>
    );
}
