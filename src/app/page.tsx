import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { Contact } from "@/components/sections/contact";
import { SelectedWork } from "@/components/sections/selected-work";
import { Testimonials } from "@/components/sections/testimonials";
// Removed unused imports: projects, ProjectCard, SectionHeading (SectionHeading used? No, removed from usage in page.tsx)

export default function Home() {
  return (
    <main className="flex flex-col gap-16 md:gap-24 pb-16">
      <Hero />
      <About />

      <SelectedWork />

      <Testimonials />
      <Services />
      <Contact />
    </main>
  );
}
