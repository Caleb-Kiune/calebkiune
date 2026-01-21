import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText } from "lucide-react";

export function Hero() {
    return (
        <section className="pt-24 pb-12 md:pt-32 md:pb-20 px-6">
            <div className="container mx-auto max-w-5xl flex flex-col items-center text-center md:items-start md:text-left gap-8">

                <div className="space-y-4 max-w-3xl">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
                        Building production-ready web apps for startups and growing businesses.
                    </h1>
                    <p className="text-xl text-muted-foreground md:text-2xl font-light">
                        Full-Stack Developer | React & Next.js Specialist | Based in Nairobi.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <Button asChild size="lg" className="gap-2">
                        <Link href="#projects">
                            View Selected Work
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </Button>

                    <Button asChild variant="outline" size="lg" className="gap-2">
                        {/* Note: resume.pdf must exist in public/ folder */}
                        <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                            <FileText className="h-4 w-4" />
                            Download Resume
                        </Link>
                    </Button>
                </div>

            </div>
        </section>
    );
}
