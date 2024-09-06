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
  duration = 600,
  framerProps = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 3 },
  },
  className,
  animateOnLoad = true,
}: HyperTextProps) {
  const [displayText, setDisplayText] = useState(before.split(""));
  const [trigger, setTrigger] = useState<"toAfter" | "toBefore" | null>(null);
  const iterations = useRef(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startScrambling = (toAfter: boolean) => {
    iterations.current = 0;
    setTrigger(toAfter ? "toAfter" : "toBefore");
  };

  useEffect(() => {
    if (!trigger) return;

    const targetText = trigger === "toAfter" ? after : before;

    // Clear any existing interval before starting a new one
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
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
        clearInterval(intervalRef.current!);
        if (trigger === "toAfter") {
          // Queue the "toBefore" animation after completing "toAfter"
          setTrigger("toBefore");
        } else {
          setTrigger(null); // End the cycle
        }
      }
    }, duration / (targetText.length * 10));

    // Clean up interval on unmount
    return () => clearInterval(intervalRef.current!);
  }, [before, after, duration, trigger]);

  const handleMouseEnter = () => {
    startScrambling(true);
  };

  const handleMouseLeave = () => {
    // Queue the toBefore animation after completing toAfter
    if (trigger === "toAfter") {
      setTimeout(() => startScrambling(false), 100)
      return;
    }
    startScrambling(false);
  };

  return (
    <div
      className="overflow-hidden py-2 flex cursor-default scale-100"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
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
