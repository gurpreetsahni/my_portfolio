"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { certifications } from "@/lib/data";

export default function Certifications() {
  return (
    <section id="certifications" className="relative section-pad container-px">
      <div className="absolute bottom-0 right-0 w-[24rem] h-[24rem] bg-aurora-3 rounded-full blur-3xl -z-10 opacity-30" />

      <SectionHeading eyebrow="Credentials" title="Certifications" align="center" />

      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.name}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="glass glow-border rounded-2xl p-6 text-center flex flex-col items-center"
          >
            <div className="rounded-full bg-gradient-to-br from-accent-violet/20 to-accent-blue/20 p-4">
              <Award size={22} className="text-accent-blue" />
            </div>
            <h3 className="font-display text-base text-ink-primary mt-4 leading-snug">
              {cert.name}
            </h3>
            <p className="font-mono text-xs text-ink-faint mt-2">{cert.issuer}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
