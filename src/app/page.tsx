"use client";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlights";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { motion } from "framer-motion";
import Link from 'next/link';
import logo from '../../public/logo.png';
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { CanvasRevealEffectDemo } from "@/components/ui/canvas-reavel-card";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroHighlight>
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
        >
          Arcaxio&apos;s Portfolio <br></br>
          <Highlight className="text-black dark:text-white">
            <Link href='/projects'>
              Just testing things out
            </Link>
          </Highlight>
        </motion.h1>
      </HeroHighlight>

      <MacbookScroll src={logo} title="Cool scroll animation, woah" />

      <BackgroundGradientAnimation>
        <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
          <p className="bg-clip-text drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
            Cool Gradient Section
          </p>
        </div>
      </BackgroundGradientAnimation>

      {/* Grid Background */}
      <div className="h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
          More to come!
        </p>
      </div>

      <CanvasRevealEffectDemo />
    </main>
  );
}
