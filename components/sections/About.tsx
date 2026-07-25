"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { profile, stats, timeline } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="relative section-pad container-px overflow-hidden">
      <div className="absolute top-1/3 right-0 w-[24rem] max-w-full h-[24rem] bg-aurora-2 rounded-full blur-3xl -z-10 opacity-40" />

      <SectionHeading
        eyebrow="About"
        title="Infrastructure that gets out of the way"
        description={profile.about}
      />

      {/* Profile Photo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="mt-12 flex justify-center"
      >
        <div className="relative mx-auto">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-accent-violet to-accent-blue opacity-60 blur-md" />
          <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-2 border-white/10">
            <Image
              src="/photo.png"
              alt={profile.name}
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </div>
      </motion.div>

      <div className="mt-16 grid md:grid-cols-2 gap-12 items-start">
        {/* Timeline */}
        <div className="relative pl-8">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-accent-violet via-accent-blue to-transparent" />
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="relative mb-10"
          >
            <span className="absolute -left-8 top-1.5 h-3.5 w-3.5 rounded-full bg-gradient-to-br from-accent-violet to-accent-blue shadow-glow-sm" />
            <span className="font-mono text-xs text-accent-blue">{profile.education.year}</span>
            <h3 className="font-display text-lg text-ink-primary mt-1">{profile.education.degree}</h3>
            <p className="text-ink-muted text-sm mt-1">
              {profile.education.school} — {profile.education.detail}
            </p>
          </motion.div>
          {timeline.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative mb-10 last:mb-0"
            >
              <span className="absolute -left-8 top-1.5 h-3.5 w-3.5 rounded-full bg-gradient-to-br from-accent-violet to-accent-blue shadow-glow-sm" />
              <span className="font-mono text-xs text-accent-blue">{item.year}</span>
              <h3 className="font-display text-lg text-ink-primary mt-1">{item.label}</h3>
              <p className="text-ink-muted text-sm mt-1">{item.detail}</p>
            </motion.div>
          ))}
        </div>

        {/* Philosophy + stats */}
        <div className="flex flex-col gap-8">
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="glass glow-border rounded-2xl p-8"
          >
            <p className="font-display text-xl md:text-2xl text-ink-primary leading-snug">
              &ldquo;{profile.philosophy}&rdquo;
            </p>
            <footer className="mt-4 font-mono text-xs text-ink-muted">— {profile.name}</footer>
          </motion.blockquote>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass rounded-2xl p-5"
              >
                <div className="font-display text-3xl text-gradient font-medium">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.value % 1 !== 0 ? 1 : 0}
                  />
                </div>
                <p className="mt-1 text-xs text-ink-muted">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
