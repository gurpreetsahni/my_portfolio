"use client";

import { useRef, useState, MouseEvent, ReactNode, useEffect } from "react";
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

  // Reset position when page regains focus (e.g., returning from PDF)
  useEffect(() => {
    const handleVisibility = () => {
      if (document.visibilityState === "visible") {
        setPos({ x: 0, y: 0 });
      }
    };
    const handleFocus = () => setPos({ x: 0, y: 0 });

    document.addEventListener("visibilitychange", handleVisibility);
    window.addEventListener("focus", handleFocus);
    window.addEventListener("pageshow", handleFocus);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
      window.removeEventListener("focus", handleFocus);
      window.removeEventListener("pageshow", handleFocus);
    };
  }, []);

  const handleMouseMove = (e: MouseEvent) => {
    // Disable magnetic effect on touch devices
    if ("ontouchstart" in window) return;
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
      onTouchEnd={reset}
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
