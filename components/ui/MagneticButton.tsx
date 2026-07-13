"use client";

import { useRef, useState, MouseEvent, ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useClickSound } from "@/lib/useClickSound";

export default function MagneticButton({
  children,
  className,
  onClick,
  as = "button",
  href,
  type,
  disabled,
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  as?: "button" | "a";
  href?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}) {
  const ref = useRef<HTMLButtonElement & HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const playClick = useClickSound();

  const handleMouseMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.35;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.35;
    setPos({ x, y });
  };

  const reset = () => setPos({ x: 0, y: 0 });

  const handleClick = () => {
    if (disabled) return;
    playClick();
    onClick?.();
  };

  const Comp = motion[as === "a" ? "a" : "button"] as any;

  return (
    <Comp
      ref={ref}
      href={href}
      type={type}
      disabled={disabled}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.2 }}
      className={cn(
        "relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-medium text-sm transition-colors",
        className
      )}
    >
      {children}
    </Comp>
  );
}
