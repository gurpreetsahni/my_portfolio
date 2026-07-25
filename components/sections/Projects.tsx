"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import GlowCard from "@/components/ui/GlowCard";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="relative section-pad container-px">
      <SectionHeading
        eyebrow="Selected Work"
        title="Featured Projects"
        description="Infrastructure systems designed to disappear into the background — until you need to change them fast."
      />

      <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: (i % 3) * 0.1 }}
          >
            <GlowCard className="h-full flex flex-col">
              <div className="flex items-start justify-between">
                <span className="font-mono text-xs text-ink-faint">0{i + 1}</span>
              </div>

              <h3 className="font-display text-xl text-ink-primary mt-6 leading-snug">
                {project.title}
              </h3>
              <p className="mt-3 text-sm text-ink-muted leading-relaxed flex-1">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-base-line bg-white/[0.03] px-3 py-1 text-xs text-ink-muted whitespace-nowrap"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </GlowCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
