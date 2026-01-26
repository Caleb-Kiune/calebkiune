import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://calebkiune.vercel.app"),
  title: {
    default: "Caleb Kiune | Full-Stack Developer & Technical Partner",
    template: "%s | Caleb Kiune",
  },
  description: "Senior Full-Stack Developer in Nairobi. Specializing in high-performance Next.js apps for Insurance, FinTech, and growing businesses.",
  keywords: ["Next.js Developer", "Nairobi Tech", "Freelance Software Engineer", "React", "T3 Stack", "Web Development Kenya"],
  authors: [{ name: "Caleb Kiune" }],
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://calebkiune.vercel.app",
    siteName: "Caleb Kiune Portfolio",
    title: "Caleb Kiune | Technical Partner",
    description: "Building production-ready web apps for startups and growing businesses. View my selected work.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Caleb Kiune Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Caleb Kiune | Full-Stack Developer",
    description: "Building production-ready web apps for startups and growing businesses.",
    images: ["/og-image.jpg"],
  },
};

import { Footer } from "@/components/layout/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans min-h-screen bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
