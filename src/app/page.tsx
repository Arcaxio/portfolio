"use client";
import { FloatingDockComponent } from "@/components/ui/floating-dock-component";
import { motion } from "framer-motion";
import Link from 'next/link';
import { IconMail } from "@tabler/icons-react";
import { AlertToast } from '@/components/ui/alertToast'
import { FocusCardsDemo } from "@/components/ui/focus-cards-component";
import HyperText from "@/components/magicui/hyper-text";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* MacBar */}
      <motion.div
        initial={{ opacity: 0, y: 48 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.25, delay: 0.9 }}
        className="fixed z-10 right-10 md:right-20 bottom-0"
      >
        <FloatingDockComponent />
      </motion.div>

      {/* Greetings */}
      <motion.div className="h-dvh w-4/5 py-4"
        id="section-greetings"
        initial={{ opacity: 0, y: -12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.20 }}
        transition={{ ease: "easeOut", duration: 0.25, delay: 0.6 }}
      >
        <div className="text-6xl pt-20">
          <div className="flex flex-row ">
            <p className="pt-1.5 pe-0.5">
              Hello, I&apos;m&nbsp;
            </p>
            <HyperText className="font-['Montserrat'] text-primary" before="Jasper&nbsp;" after="Arcaxio" />
          </div>
          <p className="text-accent font-['Montserrat']">
            Front-End Web Developer
          </p>
        </div>
        <motion.div className="text-3xl"
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.20 }}
          transition={{ ease: "easeOut", duration: 0.25, delay: 0.9 }}
        >
          <p>
            I can do other things too!
          </p>
        </motion.div>
      </motion.div>

      {/* Projects */}
      <motion.div className="w-4/5 py-4 mb-4"
        id="section-projects"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.20 }}
        transition={{ ease: "easeOut", duration: 0.25, delay: 0.1 }}
      >
        <div className="mb-8">
          <p className="text-6xl text-center">
            Projects
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.20 }}
          transition={{ ease: "easeOut", duration: 0.35, delay: 0.4 }}
        >
          <FocusCardsDemo />
        </motion.div>
      </motion.div>

      {/* Footer */}
      <footer className="grid grid-cols-8 md:grid-cols-12 h-36 w-full" id="section-footer">
        <div className="col-start-1 col-end-4 w-full h-full bg-base-100 flex items-center justify-center">
          <motion.button className="btn md:btn-lg btn-primary" id="button-mail" onClick={() => (document.getElementById('my_modal_2') as HTMLDialogElement).showModal()}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.2,
              ease: [0, 0.7, 0.2, 1],
              scale: {
                type: "spring",
                damping: 8,
                stiffness: 200,
                restDelta: 0.001
              }
            }}
            whileHover={{ scale: 0.9, transition: { duration: 0.2 }, }}
          >
            Contact Me
          </motion.button>
        </div>
        <div className="col-start-4 col-end-6 w-full h-full bg-base-100 flex flex-col items-center justify-center text-lg pr-8">
          <p>
            Made with:
          </p>
          <p className="text-center">
            <a href="https://daisyui.com/" className="text-primary">DaisyUI</a> & <a href="https://ui.aceternity.com/" className="text-primary">Aceternity UI</a>
          </p>
        </div>
        <div className="col-start-6 col-end-8 col-span-2 w-full h-full bg-gradient-to-r from-[oklch(var(--b1))] flex items-center ">
          <p className="text-lg">
            &reg; 2024 Jasper / Arcaxio
          </p>
        </div>
      </footer>

      {/* Modal */}
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Contact</h3>
          <div className="flex flex-wrap justify-between items-end pt-6">
            <div>
              <p className="font-bold">Email</p>
              <p className="">jasperkueh@gmail.com</p>
            </div>
            <div className="mt-2">
              {/* <button className="btn btn-primary mx-1" onClick={() => { alertToast() }} ><IconClipboard />Copy</button>
               */}
              {AlertToast()}
              <a href="mailto:jasperkueh@gmail.com" className="btn btn-primary ms-1"><IconMail />Compose</a>
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </main>
  );
}
