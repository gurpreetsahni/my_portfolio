"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="relative section-pad container-px overflow-hidden">
      <div className="absolute top-0 left-0 w-[26rem] max-w-full h-[26rem] bg-aurora-1 rounded-full blur-3xl -z-10 opacity-30" />

      <SectionHeading
        eyebrow="Career"
        title="Where I've built"
        description="Nearly five years designing and operating cloud platforms for enterprise workloads."
      />

      <div className="mt-16 flex flex-col gap-6 max-w-3xl">
        {experience.map((job, i) => (
          <motion.div
            key={job.company}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: i * 0.12 }}
            className="glass glow-border rounded-2xl p-6 md:p-8"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-gradient-to-br from-accent-violet/20 to-accent-blue/20 p-3">
                  <Briefcase size={20} className="text-accent-blue" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-ink-primary">{job.role}</h3>
                  <p className="text-accent-blue text-sm mt-0.5">{job.company}</p>
                  <p className="text-ink-faint text-xs mt-0.5">{job.focus}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {job.current && (
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-cyan" />
                  </span>
                )}
                <span className="font-mono text-xs text-ink-faint">{job.period}</span>
              </div>
            </div>

            <ul className="mt-5 flex flex-col gap-2">
              {job.bullets.map((b) => (
                <li key={b} className="flex gap-3 text-sm text-ink-muted leading-relaxed">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-blue" />
                  {b}
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-2">
              {job.highlights.map((h) => (
                <span
                  key={h}
                  className="rounded-full border border-base-line bg-white/[0.03] px-3 py-1 text-xs text-ink-muted whitespace-nowrap"
                >
                  {h}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
