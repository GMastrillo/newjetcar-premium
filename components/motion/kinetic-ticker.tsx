"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface KineticTickerProps {
  items?: string[];
  className?: string;
  speedSeconds?: number;
}

const DEFAULT_ITEMS = [
  "PORSCHE",
  "FERRARI",
  "LAMBORGHINI",
  "MERCEDES-AMG",
  "BMW M-POWER",
  "MCLAREN",
  "ASTON MARTIN",
  "MASERATI",
  "CURADORIA PERICIAL",
  "ENTREGA NACIONAL VIP",
  "BESPOKE CONCIERGE",
];

export function KineticTicker({
  items = DEFAULT_ITEMS,
  className,
  speedSeconds = 35,
}: KineticTickerProps) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden border-y border-white/10 bg-black/60 py-4 sm:py-5 backdrop-blur-sm select-none group",
        className
      )}
    >
      {/* Subtle edge fades */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      <div
        className="flex whitespace-nowrap will-change-transform group-hover:[animation-play-state:paused]"
        style={{
          animation: `ticker ${speedSeconds}s linear infinite`,
        }}
      >
        {/* Render twice for continuous loop */}
        {[...items, ...items, ...items].map((item, idx) => {
          const isAccent = idx % 3 === 0;
          return (
            <div
              key={idx}
              className="inline-flex items-center space-x-6 sm:space-x-10 mx-3 sm:mx-5"
            >
              <span
                className={cn(
                  "text-xs sm:text-sm font-mono tracking-[0.35em] uppercase transition-colors duration-300",
                  isAccent
                    ? "text-accent font-semibold"
                    : "text-neutral-400 group-hover:text-white"
                )}
              >
                {item}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent/40" />
            </div>
          );
        })}
      </div>

      <style jsx global>{`
        @keyframes ticker {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.333333%);
          }
        }
      `}</style>
    </div>
  );
}
