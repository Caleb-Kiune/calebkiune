import Link from "next/link";
import { Github, Linkedin, Twitter, MessageSquare, Terminal } from "lucide-react";

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
                                { icon: Github, href: "https://github.com/Caleb-Kiune", label: "GitHub" },
                                { icon: Linkedin, href: "https://www.linkedin.com/in/caleb-kiune-b356a6327/", label: "LinkedIn" },
                                { icon: Twitter, href: "https://x.com/calebkiune", label: "X / Twitter" },
                                { icon: MessageSquare, href: "https://wa.me/254705774171", label: "WhatsApp" }
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
