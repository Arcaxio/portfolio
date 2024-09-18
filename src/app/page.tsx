"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  IconMail,
  IconBrandX,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandDiscord,
} from "@tabler/icons-react";
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
import ArcaxioSVG from "@/components/icons/arcaxio";
import { PopdownMenu } from "@/components/selfmadeui/popdown-menu";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.innerWidth < 1024 ? setIsVisible(true) : setIsVisible(false);
  }, []);

  return (
    <>
      {/* Popdown menu */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            key="popdown"
            className="fixed top-8 right-8 min-h-dvh w-min z-[3]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "linear", duration: 0.2 }}
          >
            <PopdownMenu />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Greetings */}
      <div className="wrapper bg-base-300 rounded-b-[3rem] lg:rounded-b-[4rem]">
        <div className="flex flex-col justify-evenly min-h-dvh w-11/12 lg:w-9/12 py-4 mx-auto">
          {/* Navbar */}
          <motion.div
            className="hidden lg:flex navbar bg-primary text-base-300 rounded-full my-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.3, delay: 0.6 }}
            onViewportLeave={() => setIsVisible(true)}
            onViewportEnter={() => setIsVisible(false)}
          >
            <div className="navbar-start">
              <button
                className="btn btn-ghost hover:bg-primary"
                onClick={() =>
                  theme === "dark" ? setTheme("light") : setTheme("dark")
                }
              >
                <ArcaxioSVG
                  className="fill-base-300"
                  height="100%"
                  width="100%"
                />
              </button>
            </div>
            <div className="navbar-end me-2">
              <a
                className="btn btn-ghost text-xl hover:bg-base-300 hover:text-base-content"
                href="#section-projects"
              >
                Projects
              </a>
              <a
                className="btn btn-ghost text-xl hover:bg-base-300 hover:text-base-content"
                href="https://x.com/arcaxio"
              >
                Twitter
              </a>
              <a
                className="btn btn-ghost text-xl hover:bg-base-300 hover:text-base-content"
                href="https://github.com/Arcaxio"
              >
                Github
              </a>
              <a
                className="btn btn-ghost text-xl hover:bg-base-300 hover:text-base-content"
                href="https://www.linkedin.com/in/jasper-kueh/"
              >
                LinkedIn
              </a>
              <button
                className="btn btn-ghost text-xl hover:bg-base-300 hover:text-base-content"
                onClick={() =>
                  (
                    document.getElementById("my_modal_2") as HTMLDialogElement
                  ).showModal()
                }
              >
                Contact
              </button>
            </div>
          </motion.div>

          <motion.div
            className="my-2"
            id="section-greetings"
            initial={{ opacity: 0, y: -12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ ease: "easeOut", duration: 0.3, delay: 1 }}
          >
            <div className="text-5xl lg:text-6xl">
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
                className="text-2xl lg:text-3xl"
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ ease: "easeOut", duration: 0.3, delay: 1.4 }}
              >
                <p>
                  I strive to design & develop software that is of satisfactory
                  quality.
                </p>
              </motion.div>
            </div>
          </motion.div>
          <div className="my-2">
            <motion.div
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ ease: "easeOut", duration: 0.3, delay: 1.8 }}
            >
              <p className="text-4xl lg:text-5xl pb-2 text-primary">
                MY TECH STACK
              </p>
              <p className="text-2xl lg:text-3xl pb-8">
                My ever expanding repertoire of{" "}
                <span className="text-accent">technologies</span> that I use.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 36 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ ease: "easeOut", duration: 0.3, delay: 2.2 }}
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
        <div className="w-11/12 lg:w-9/12 pt-4 pb-16 mx-auto rounded-b-[4rem]">
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
      </div>

      {/* Footer */}
      <div
        className="relative h-[50dvh] w-full bg-base-100"
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <footer className="fixed bottom-0 h-[50dvh] w-full md:text-xl xl:text-2xl" id="section-footer">
          <div className="grid grid-rows-3 md:grid-rows-2 grid-cols-2 md:grid-cols-3 gap-2 justify-items-center items-center h-full w-11/12 lg:w-9/12 mx-auto py-8 md:py-12">
            <div className="w-full h-full col-span-2 md:row-span-2 md:col-span-1 text-center">
              <div className="flex flex-row md:flex-col items-center justify-around h-full border-2 border-primary p-2 md:p-4">
                <p className="text-xl md:text-3xl">
                  Interested?<br></br>Let&apos;s talk!
                </p>
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
            </div>
            <div className="w-full h-full col-span-2 text-center">
              <div className="flex flex-row flex-wrap h-full items-center justify-evenly">
                <div className="flex flex-row items-center hover:text-primary px-2">
                  <IconBrandX className="me-2" />
                  <a href="https://x.com/arcaxio">Twitter</a>
                </div>
                <div className="flex flex-row items-center hover:text-primary px-2">
                  <IconBrandGithub className="me-2" />
                  <a href="https://github.com/Arcaxio">Github</a>
                </div>
                <div className="flex flex-row items-center hover:text-primary px-2">
                  <IconBrandLinkedin className="me-2" />
                  <a href="https://github.com/Arcaxio">LinkedIn</a>
                </div>
                <div className="flex flex-row items-center hover:text-primary px-2">
                  <IconBrandDiscord className="me-2" />
                  <a href="https://discordapp.com/users/156669575650344960">
                    Discord
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full h-full col-span-2 text-center">
              <div className="flex flex-row h-full items-end justify-evenly">
                <div className="flex flex-col h-full items-start justify-evenly px-2 md:px-8">
                  <ol className="hover:text-primary">
                    <a href="#">About</a>
                  </ol>
                  <ol className="hover:text-primary">
                    <a href="#section-projects">Projects</a>
                  </ol>
                  <ol className="hover:text-primary">
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                      Links
                    </a>
                  </ol>
                </div>

                <div className="flex flex-col h-full items-center justify-evenly">
                  <p>Portfolio v1 - 17 Sep 2024</p>
                  <p className="text-center">
                    Made with&nbsp;
                    <a href="https://daisyui.com/" className="text-primary">
                      DaisyUI
                    </a>
                    <span> & </span>
                    <a
                      href="https://ui.aceternity.com/"
                      className="text-primary"
                    >
                      Aceternity UI
                    </a>
                  </p>
                  <div className="flex flex-row items-end justify-between">
                    <ArcaxioSVG className="fill-current h-8" />
                    <p>Copyright &copy; Arcaxio 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>

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
