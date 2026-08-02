import SectionHeading from "@/components/ui/SectionHeading";
import { techStack as staticTechStack } from "@/lib/data";

export default function TechStack({ techStack: techStackProp }: { techStack?: string[] }) {
  const techStack = techStackProp || staticTechStack;
  const loopItems = [...techStack, ...techStack];

  return (
    <section id="tech-stack" className="relative section-pad container-px overflow-hidden">
      <SectionHeading eyebrow="Tooling" title="Tech Stack" align="center" />

      <div className="mt-14 relative">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-base-bg to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-base-bg to-transparent z-10" />

        <div className="flex w-max animate-marquee">
          {loopItems.map((tech, i) => (
            <div
              key={`${tech}-${i}`}
              className="glass mx-3 rounded-full px-6 py-3 font-mono text-sm text-ink-primary whitespace-nowrap"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
