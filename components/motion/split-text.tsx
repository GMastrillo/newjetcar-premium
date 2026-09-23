"use client";

import { motion, HTMLMotionProps, Variants } from "motion/react";
import React, { useMemo } from "react";
import { cn } from "@/lib/utils";

interface SplitTextProps extends HTMLMotionProps<"div"> {
  text: string;
  mode?: "char" | "word";
  stagger?: number;
  delay?: number;
  duration?: number;
  className?: string;
  triggerOnView?: boolean;
}

export function SplitText({
  text,
  mode = "char",
  stagger = 0.02,
  delay = 0,
  duration = 0.65,
  className,
  triggerOnView = true,
  ...props
}: SplitTextProps) {
  const words = useMemo(() => text.split(" "), [text]);

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      y: "115%",
      opacity: 0,
    },
    visible: {
      y: "0%",
      opacity: 1,
      transition: {
        duration,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const animationProps = triggerOnView
    ? {
        initial: "hidden" as const,
        whileInView: "visible" as const,
        viewport: { once: true, margin: "-8% 0px" },
      }
    : {
        initial: "hidden" as const,
        animate: "visible" as const,
      };

  return (
    <motion.div
      variants={containerVariants}
      {...animationProps}
      className={cn("inline-block", className)}
      {...props}
    >
      {mode === "word" ? (
        words.map((word, wordIdx) => (
          <span
            key={`${word}-${wordIdx}`}
            className="inline-block overflow-hidden mr-[0.25em] align-top"
          >
            <motion.span
              variants={itemVariants}
              className="inline-block will-change-transform"
            >
              {word}
            </motion.span>
          </span>
        ))
      ) : (
        words.map((word, wordIdx) => (
          <span
            key={`${word}-${wordIdx}`}
            className="inline-block whitespace-nowrap mr-[0.25em] align-top"
          >
            {word.split("").map((char, charIdx) => (
              <span
                key={`${char}-${charIdx}`}
                className="inline-block overflow-hidden align-top"
              >
                <motion.span
                  variants={itemVariants}
                  className="inline-block will-change-transform"
                >
                  {char}
                </motion.span>
              </span>
            ))}
          </span>
        ))
      )}
    </motion.div>
  );
}
