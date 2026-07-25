"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import dynamic from "next/dynamic";
import MagneticButton from "@/components/ui/MagneticButton";
import { profile } from "@/lib/data";

const NetworkField = dynamic(() => import("@/components/ui/NetworkField"), { ssr: false });

function useTypingRoles(roles: string[]) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index % roles.length];
    const speed = deleting ? 35 : 65;

    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) {
          setTimeout(() => setDeleting(true), 1200);
        }
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setIndex((i) => i + 1);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, index, roles]);

  return text;
}

const nameChars = "Gurpreet Singh Sahni".split("");

export default function Hero() {
  const typed = useTypingRoles(profile.roles);

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden container-px pt-28 pb-20"
    >
      <div className="absolute inset-0 -z-20 bg-grid" aria-hidden="true" />
      <div className="absolute -top-40 left-0 w-[36rem] max-w-full h-[36rem] bg-aurora-1 rounded-full blur-3xl -z-20 animate-float" />
      <div className="absolute top-0 right-0 w-[30rem] max-w-full h-[30rem] bg-aurora-2 rounded-full blur-3xl -z-20 animate-float" style={{ animationDelay: "-2s" }} />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[28rem] max-w-full h-[28rem] bg-aurora-3 rounded-full blur-3xl -z-20 animate-float" style={{ animationDelay: "-4s" }} />

      <NetworkField />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="glass rounded-full px-4 py-1.5 mb-8 flex items-center gap-2"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-cyan" />
        </span>
        <span className="font-mono text-xs text-ink-muted">
          Available for architecture &amp; DevOps engagements
        </span>
      </motion.div>

      <h1 className="font-display text-center text-[13vw] leading-[0.95] md:text-[6vw] md:leading-[0.95] font-medium tracking-tight text-gradient max-w-6xl">
        {nameChars.map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 + i * 0.02, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        className="mt-6 h-8 flex items-center"
      >
        <span className="font-mono text-base md:text-xl text-accent-blue">
          {typed}
          <span className="inline-block w-[2px] h-5 md:h-6 bg-accent-blue ml-1 align-middle animate-pulse" />
        </span>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.25 }}
        className="mt-6 max-w-xl text-center text-ink-muted text-base md:text-lg"
      >
        Designing enterprise AWS infrastructure and Kubernetes platforms that stay fast,
        secure, and boring — in the best way.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="mt-10 flex flex-wrap items-center justify-center gap-4"
      >
        <MagneticButton
          onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
          className="bg-gradient-to-r from-accent-violet to-accent-blue text-white shadow-glow"
        >
          View Projects
          <ArrowRight size={16} />
        </MagneticButton>

        <MagneticButton as="a" href="/resume.pdf" className="glass text-ink-primary">
          <Download size={16} />
          Download Resume
        </MagneticButton>

        <MagneticButton
          onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
          className="text-ink-muted hover:text-ink-primary"
        >
          <Mail size={16} />
          Contact Me
        </MagneticButton>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] tracking-[0.2em] text-ink-faint uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-accent-violet to-transparent"
        />
      </motion.div>
    </section>
  );
}
