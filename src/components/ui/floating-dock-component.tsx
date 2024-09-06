import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
  IconMail
} from "@tabler/icons-react";
import Image from "next/image";

export function FloatingDockComponent() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#section-greetings",
    },

    {
      title: "Projects",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#section-projects",
    },
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://x.com/arcaxio",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/Arcaxio",
    },
    {
        title: "Contact",
        icon: (
          <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#button-mail",
      },
  ];
  return (
    <div className="h-[4rem] m-2">
      <FloatingDock
        items={links}
      />
    </div>
  );
}
