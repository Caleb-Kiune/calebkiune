import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { Contact } from "@/components/sections/contact";
import { ProjectCard } from "@/components/sections/project-card";
import { projects } from "@/lib/constants/projects";
import { SectionHeading } from "@/components/ui/section-heading";

export default function Home() {
  return (
    <main className="flex flex-col gap-16 md:gap-24 pb-16">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. About / Authority Section */}
      <About />

      {/* 3. Projects Section */}
      <section id="projects" className="container mx-auto px-6 max-w-5xl">
        <SectionHeading
          title="Selected Work"
          subtitle="Real-world solutions delivering tangible business results."
          className="mb-12"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* 
              Using grid for larger screens if we have multiple projects. 
              The requirements asked for "Stacked" layout WITHIN the card (which is handled in project-card.tsx),
              but the Page layout for projects wasn't strictly specified as list vs grid. 
              Given "Stack the sections vertically", and projects list usually looks good as a grid or stack.
              Let's use a responsive grid (1 col mobile, 2 col desktop) for the cards themselves.
           */}
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* 3. Services Section */}
      <Services />

      {/* 4. Contact Section */}
      <Contact />
    </main>
  );
}
