"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const navHeight = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-[80] transition-all duration-500",
          scrolled ? "py-3" : "py-6"
        )}
      >
        <div className="container-px flex items-center justify-between">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("#hero");
            }}
            className={cn(
              "font-display text-lg font-medium tracking-tight rounded-full px-4 py-2 transition-all duration-500",
              scrolled ? "glass" : ""
            )}
          >
            GS<span className="text-accent-violet">.</span>
          </a>

          <nav
            className={cn(
              "hidden md:flex items-center gap-1 rounded-full px-2 py-2 transition-all duration-500",
              scrolled ? "glass" : ""
            )}
          >
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => handleLinkClick(link.href)}
                className="relative px-4 py-2 text-sm text-ink-muted hover:text-ink-primary transition-colors rounded-full hover:bg-white/5"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => handleLinkClick("#contact-form")}
            className="hidden md:inline-flex items-center rounded-full bg-gradient-to-r from-accent-violet to-accent-blue px-5 py-2.5 text-sm font-medium text-white shadow-glow-sm hover:opacity-90 transition-opacity"
          >
            Let's Talk
          </button>

          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => handleLinkClick("#contact-form")}
              className="inline-flex items-center rounded-full bg-gradient-to-r from-accent-violet to-accent-blue px-4 py-2 text-xs font-medium text-white shadow-glow-sm"
            >
              Let's Talk
            </button>
            <button
              onClick={() => setOpen(true)}
              className="glass rounded-full p-2.5"
              aria-label="Open menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-base-bg/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex justify-end container-px pt-6">
              <button
                onClick={() => setOpen(false)}
                className="glass rounded-full p-2.5"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>
            <nav className="flex flex-col items-center justify-center gap-6 h-[70vh]">
              {links.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i }}
                  onClick={() => handleLinkClick(link.href)}
                  className="font-display text-3xl text-ink-primary"
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
