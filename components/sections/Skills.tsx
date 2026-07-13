"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import GlowCard from "@/components/ui/GlowCard";
import { skillCategories } from "@/lib/data";
import { getSkillIcon } from "@/lib/skillIcons";

function SkillIcon({ name }: { name: string }) {
  const iconUrl = getSkillIcon(name);
  const [failed, setFailed] = useState(false);

  if (!iconUrl || failed) {
    return <span className="text-base flex-shrink-0 w-[18px] h-[18px] flex items-center justify-center">⚙️</span>;
  }

  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src={iconUrl}
      alt={name}
      width={18}
      height={18}
      className="flex-shrink-0 w-[18px] h-[18px] object-contain"
      onError={() => setFailed(true)}
      loading="lazy"
    />
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative section-pad container-px">
      <SectionHeading
        eyebrow="Capabilities"
        title="A toolkit built for production"
        description="Every category below is something I've shipped and operated in real, revenue-carrying environments — not a checklist."
      />

      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {skillCategories.map((cat, ci) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (ci % 4) * 0.08 }}
          >
            <GlowCard tilt={false} className="h-full">
              <h3 className="font-display text-lg text-ink-primary mb-6">{cat.label}</h3>
              <div className="flex flex-col gap-4">
                {cat.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm text-ink-primary flex items-center gap-2">
                        <SkillIcon name={skill.name} />
                        {skill.name}
                      </span>
                      <span className="font-mono text-xs text-ink-faint">{skill.level}%</span>
                    </div>
                    <div className="h-2 sm:h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true, amount: 0 }}
                        transition={{ duration: 0.9, delay: 0.1 + si * 0.08, ease: [0.16, 1, 0.3, 1] }}
                        className="h-full rounded-full bg-gradient-to-r from-accent-violet to-accent-blue"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </GlowCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
