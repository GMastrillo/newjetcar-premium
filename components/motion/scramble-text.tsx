"use client";

import React, { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

interface ScrambleTextProps {
  text: string;
  className?: string;
  speed?: number; // interval in ms
  cyclesPerChar?: number;
  triggerOnView?: boolean;
}

const GLYPHS = "ABCDEFGHJKLMNPQRSTUVWXYZ0123456789_/";

export function ScrambleText({
  text,
  className,
  speed = 25,
  cyclesPerChar = 2,
  triggerOnView = true,
}: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const containerRef = useRef<HTMLSpanElement>(null);
  const hasTriggeredRef = useRef(false);

  useEffect(() => {
    let iteration = 0;
    let interval: NodeJS.Timeout | null = null;

    const startScramble = () => {
      if (interval) clearInterval(interval);
      iteration = 0;

      interval = setInterval(() => {
        setDisplayText(
          text
            .split("")
            .map((char, index) => {
              if (char === " " || char === "•" || char === "/" || char === "-") {
                return char;
              }
              if (index < Math.floor(iteration / cyclesPerChar)) {
                return text[index];
              }
              return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
            })
            .join("")
        );

        if (iteration >= text.length * cyclesPerChar) {
          if (interval) clearInterval(interval);
          setDisplayText(text);
        }

        iteration++;
      }, speed);
    };

    if (!triggerOnView) {
      startScramble();
      return () => {
        if (interval) clearInterval(interval);
      };
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggeredRef.current) {
          hasTriggeredRef.current = true;
          startScramble();
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
      if (interval) clearInterval(interval);
    };
  }, [text, speed, cyclesPerChar, triggerOnView]);

  return (
    <span ref={containerRef} className={cn("inline-block font-mono", className)}>
      {displayText}
    </span>
  );
}
