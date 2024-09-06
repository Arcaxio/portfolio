"use client";
import { FloatingDockComponent } from "@/components/ui/floating-dock-component";
import { motion } from "framer-motion";
import Link from 'next/link';
import { IconMail } from "@tabler/icons-react";
import { alertToast } from '@/components/ui/alertToast'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* MacBar */}
      <motion.div
        initial={{ opacity: 0, y: 48 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.25, delay: 0.8 }}
        className="fixed z-10 right-10 md:right-20 bottom-0"
      >
        <FloatingDockComponent />
      </motion.div>

      {/* Greetings */}
      <motion.div className="h-dvh w-full p-24"
        id="section-greetings"
        initial={{ opacity: 0, y: -12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.20 }}
        transition={{ ease: "easeOut", duration: 0.25, delay: 0.6 }}
      >
        <div className="text-6xl">
          <p>
            Hello, I&apos;m
            <span className="font-['Montserrat'] text-primary"> Jasper!</span>
          </p>
          <p className="text-accent font-['Montserrat']">
            Front-End Web Developer
          </p>
        </div>
      </motion.div>

      {/* Projects */}
      <motion.div className="h-dvh w-full p-16"
        id="section-projects"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.20 }}
        transition={{ ease: "easeOut", duration: 0.25, delay: 0.1 }}>
        <div>
          <p className="text-6xl text-center">
            Projects
          </p>
        </div>
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
        <div className="col-start-4 col-end-7 w-full h-full bg-base-100 flex flex-col items-center justify-center text-lg pr-8">
          <p>
            Made with:
          </p>
          <p className="text-center">
            <a href="https://daisyui.com/" className="text-primary">DaisyUI</a> & <a href="https://ui.aceternity.com/" className="text-primary">Aceternity UI</a>
          </p>
        </div>
        <div className="col-start-7 col-end-9 col-span-2 w-full h-full bg-gradient-to-r from-[oklch(var(--b1))] flex items-center">
          <p className="text-lg">
            &reg; 2024 Jasper / Arcaxio
          </p>
        </div>
      </footer>

      {/* Modal */}
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Contact</h3>
          <div className="flex justify-between items-end pt-6">
            <div>
              <p className="font-bold">Email</p>
              <p className="">jasperkueh@gmail.com</p>
            </div>
            <div>
              {/* <button className="btn btn-primary mx-1" onClick={() => { alertToast() }} ><IconClipboard />Copy</button>
               */}
              {alertToast()}
              <a href="mailto:jasperkueh@gmail.com" className="btn btn-primary mx-1"><IconMail />Compose</a>
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
