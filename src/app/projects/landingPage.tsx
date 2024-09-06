"use client";

import { FadeText } from "@/components/magicui/fade-text";
import RetroGrid from "@/components/magicui/retro-grid";
import { LoginLink, LogoutLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs/components';
import { motion } from "framer-motion"

export default function LandingPage() {
    return (
        <div className="relative flex flex-col h-dvh w-dvw items-center justify-center overflow-hidden bg-background">
            <FadeText
                className="text-5xl md:text-7xl lg:text-9xl font-bold text-black dark:text-white text-center"
                direction="up"
                framerProps={{
                    show: { transition: { delay: 0.6, duration: 0.2 } },
                }}
                text="Write your Imaginations"
            />
            <div className="mt-32">
                <LoginLink>
                    <motion.button className="btn btn-lg sm:btn-wide btn-outline text-xl sm:text-2xl"
                        initial={{ y:-32, opacity: 0, scale: 0.75 }}
                        animate={{ y:0, opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8, duration: 0.2 }}
                    >
                        Try out now!
                    </motion.button>
                </LoginLink>
            </div>
            <RetroGrid />
        </div>
    )
}