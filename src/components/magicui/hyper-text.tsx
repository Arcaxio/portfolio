"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { cn } from "@/utils/cn";

interface HyperTextProps {
  before: string;
  after: string;
  duration?: number;
  framerProps?: Variants;
  className?: string;
  animateOnLoad?: boolean;
}

const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const getRandomInt = (max: number) => Math.floor(Math.random() * max);

export default function HyperText({
  before,
  after,
  duration = 800,
  framerProps = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 3 },
  },
  className,
  animateOnLoad = true,
}: HyperTextProps) {
  const [displayText, setDisplayText] = useState(before.split(""));
  const [trigger, setTrigger] = useState(false);
  const iterations = useRef(0);
  const isAnimatingToAfter = useRef(false);

  const triggerAnimation = (toAfter: boolean) => {
    iterations.current = 0;
    isAnimatingToAfter.current = toAfter;
    setTrigger(true);
  };

  useEffect(() => {
    if (!trigger) return;

    const targetText = isAnimatingToAfter.current ? after : before;

    const interval = setInterval(() => {
      if (iterations.current < targetText.length) {
        setDisplayText((t) =>
          t.map((l, i) =>
            l === " "
              ? l
              : i <= iterations.current
              ? targetText[i]
              : alphabets[getRandomInt(26)]
          )
        );
        iterations.current += 0.1;
      } else {
        setTrigger(false);
        clearInterval(interval);
      }
    }, duration / (targetText.length * 10));

    // Clean up interval on unmount
    return () => clearInterval(interval);
  }, [before, after, duration, trigger]);

  return (
    <div
      className="overflow-hidden py-2 flex cursor-default scale-100"
      onMouseEnter={() => triggerAnimation(true)}
      onMouseLeave={() => triggerAnimation(false)}
    >
      <AnimatePresence>
        {displayText.map((letter, i) => (
          <motion.h1
            key={i}
            className={cn("font-mono", letter === " " ? "w-3" : "", className)}
            {...framerProps}
          >
            {letter.toUpperCase()}
          </motion.h1>
        ))}
      </AnimatePresence>
    </div>
  );
}
