"use client";
import { FloatingDockComponent } from "@/components/ui/floating-dock-component";
import { motion } from "framer-motion";
import Link from "next/link";
import { IconMail } from "@tabler/icons-react";
import { AlertToast } from "@/components/ui/alertToast";
import { FocusCardsDemo } from "@/components/ui/focus-cards-component";
import HyperText from "@/components/magicui/hyper-text";
import Marquee from "react-fast-marquee";
import CSSSVG from "@/components/icons/css";
import GitSVG from "@/components/icons/git";
import HTMLSVG from "@/components/icons/html";
import JavascriptSVG from "@/components/icons/javascript";
import KubernetesSVG from "@/components/icons/kubernetes";
import NextjsSVG from "@/components/icons/nextjs";
import NodejsSVG from "@/components/icons/nodejs";
import PHPSVG from "@/components/icons/php";
import PostgreSQLSVG from "@/components/icons/postgresql";
import ReactSVG from "@/components/icons/react";
import TailwindSVG from "@/components/icons/tailwindcss";
import TypescriptSVG from "@/components/icons/typescript";

export default function Home() {
  return (
    <>
      {/* MacBar */}
      <motion.div
        initial={{ opacity: 0, y: 48 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.3, delay: 1.4 }}
        className="fixed z-10 right-10 md:right-20 bottom-0"
      >
        <FloatingDockComponent />
      </motion.div>

      {/* Greetings */}
      <div className="flex flex-col justify-around min-h-dvh w-4/5 py-8 mx-auto">
        <motion.div
          id="section-greetings"
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ ease: "easeOut", duration: 0.3, delay: 0.6 }}
        >
          <div className="text-5xl sm:text-6xl">
            <div className="flex flex-row flex-wrap">
              <p className="pt-1.5 pe-0.5">Hello, I&apos;m&nbsp;</p>
              <HyperText
                className="font-['Montserrat'] text-primary"
                before="Jasper&nbsp;"
                after="Arcaxio"
              />
            </div>
            <p className="text-accent font-['Montserrat'] pb-2">
              Front-End Developer
            </p>
            <motion.div
              className="text-2xl sm:text-3xl"
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ ease: "easeOut", duration: 0.3, delay: 1 }}
            >
              <p>
                I strive to design & develop software that is of satisfactory
                quality.
              </p>
            </motion.div>
          </div>
        </motion.div>
        <div>
          <motion.div
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ ease: "easeOut", duration: 0.3, delay: 1.4 }}
          >
            <p className="text-3xl sm:text-4xl pb-2 text-primary">
              MY TECH STACK
            </p>
            <p className="text-2xl sm:text-3xl pb-8">
              My ever expanding repertoire of{" "}
              <span className="text-accent">technologies</span> that I use.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 36 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ ease: "easeOut", duration: 0.3, delay: 1.8 }}
          >
            <Marquee
              speed={100}
              gradient
              gradientColor="oklch(var(--b3))"
              autoFill
              className="h-24"
            >
              <HTMLSVG
                className="fill-current px-2"
                width="96px"
                height="96px"
              />
              <CSSSVG
                className="fill-current px-2"
                width="96px"
                height="96px"
              />
              <JavascriptSVG
                className="fill-current px-2"
                width="96px"
                height="96px"
              />
              <TypescriptSVG
                className="fill-current px-2"
                width="96px"
                height="96px"
              />
              <ReactSVG
                className="fill-current px-2"
                width="96px"
                height="96px"
              />
              <NextjsSVG
                className="fill-current px-2"
                width="96px"
                height="96px"
              />
              <TailwindSVG
                className="fill-current px-2"
                width="96px"
                height="96px"
              />
              <PostgreSQLSVG
                className="fill-current px-2"
                width="96px"
                height="96px"
              />
              <NodejsSVG
                className="fill-current px-2"
                width="96px"
                height="96px"
              />
              <GitSVG
                className="fill-current px-2"
                width="96px"
                height="96px"
              />
              <KubernetesSVG
                className="fill-current px-2"
                width="96px"
                height="96px"
              />
              <PHPSVG
                className="fill-current px-2"
                width="96px"
                height="96px"
              />
            </Marquee>
          </motion.div>
        </div>
      </div>

      {/* Projects */}
      <div className="w-4/5 py-8 mx-auto">
        <motion.div
          id="section-projects"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ ease: "easeOut", duration: 0.3, delay: 0.1 }}
        >
          <div className="mb-8">
            <p className="text-5xl sm:text-6xl text-center">Projects</p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ ease: "easeOut", duration: 0.35, delay: 0.5 }}
          >
            <FocusCardsDemo />
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer
        className="grid grid-cols-8 md:grid-cols-12 h-36 w-full"
        id="section-footer"
      >
        <div className="col-start-1 col-end-4 w-full h-full bg-base-100 flex items-center justify-center">
          <motion.button
            className="btn md:btn-lg btn-primary"
            id="button-mail"
            onClick={() =>
              (
                document.getElementById("my_modal_2") as HTMLDialogElement
              ).showModal()
            }
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.2,
              ease: [0, 0.7, 0.2, 1],
              scale: {
                type: "spring",
                damping: 8,
                stiffness: 200,
                restDelta: 0.001,
              },
            }}
            whileHover={{ scale: 0.9, transition: { duration: 0.2 } }}
          >
            Contact Me
          </motion.button>
        </div>
        <div className="col-start-4 col-end-6 w-full h-full bg-base-100 flex flex-col items-center justify-center text-lg text-center pr-8">
          <p>Made with:</p>
          <p className="text-center">
            <a href="https://daisyui.com/" className="text-primary">
              DaisyUI
            </a>{" "}
            &{" "}
            <a href="https://ui.aceternity.com/" className="text-primary">
              Aceternity UI
            </a>
          </p>
        </div>
        <div className="col-start-6 col-end-8 col-span-2 w-full h-full bg-gradient-to-r from-[oklch(var(--b1))] flex items-center ">
          <p className="text-lg">&reg; 2024 Jasper / Arcaxio</p>
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
            <div className="join mt-2">
              {/* <button className="btn btn-primary mx-1" onClick={() => { alertToast() }} ><IconClipboard />Copy</button>
               */}
              {AlertToast()}
              <a
                href="mailto:jasperkueh@gmail.com"
                className="btn join-item btn-primary ms-1"
              >
                <IconMail />
                Compose
              </a>
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
