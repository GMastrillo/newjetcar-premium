"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface RollingTextProps {
  text: string;
  className?: string;
  accentClassName?: string;
  stagger?: boolean;
}

export function RollingText({
  text,
  className,
  accentClassName = "text-accent",
  stagger = true,
}: RollingTextProps) {
  const characters = text.split("");

  return (
    <span className={cn("relative inline-flex overflow-hidden group/roll cursor-pointer align-top", className)}>
      {/* Primary layer */}
      <span className="inline-flex">
        {characters.map((char, i) => (
          <span
            key={`char-1-${i}`}
            className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/roll:-translate-y-full will-change-transform"
            style={{
              transitionDelay: stagger ? `${i * 15}ms` : "0ms",
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>

      {/* Secondary accent layer (emerging from below) */}
      <span className={cn("absolute inset-0 inline-flex pointer-events-none", accentClassName)}>
        {characters.map((char, i) => (
          <span
            key={`char-2-${i}`}
            className="inline-block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/roll:translate-y-0 will-change-transform"
            style={{
              transitionDelay: stagger ? `${i * 15}ms` : "0ms",
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>
    </span>
  );
}
