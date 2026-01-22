import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { Contact } from "@/components/sections/contact";
import { ProjectCard } from "@/components/sections/project-card";
import { Testimonials } from "@/components/sections/testimonials";
import { projects } from "@/lib/constants/projects";
import { SectionHeading } from "@/components/ui/section-heading";

export default function Home() {
  return (
    <main className="flex flex-col gap-16 md:gap-24 pb-16">
      <Hero />
      <About />

      <section id="projects" className="container mx-auto px-6 max-w-5xl">
        <SectionHeading
          title="Selected Work"
          subtitle="Real-world solutions delivering tangible business results."
          className="mb-12"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <Testimonials />
      <Services />
      <Contact />
    </main>
  );
}
