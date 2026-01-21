"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="pt-24 pb-12 md:pt-32 md:pb-20 px-6"
        >
            <div className="container mx-auto max-w-5xl flex flex-col items-center text-center md:items-start md:text-left gap-8">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    className="space-y-4 max-w-3xl"
                >
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
                        Building production-ready web apps for startups and growing businesses.
                    </h1>
                    <p className="text-xl text-muted-foreground md:text-2xl font-light">
                        Full-Stack Developer | React & Next.js Specialist | Based in Nairobi.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                >
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
                </motion.div>

            </div>
        </motion.section>
    );
}
