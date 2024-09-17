import React from "react";
import {
  IconBrandGithub,
  IconBrandX,
  IconBrandLinkedin,
  IconHome,
  IconTerminal2,
  IconMail
} from "@tabler/icons-react";
import { Popdown } from "./popdown";

export function PopdownMenu() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-base-300 stroke-[1.5px]" />
      ),
      href: "/",
    },

    {
      title: "Projects",
      icon: (
        <IconTerminal2 className="h-full w-full text-base-300 stroke-[1.5px]" />
      ),
      href: "#section-projects",
    },
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-base-300 stroke-[1.5px]" />
      ),
      href: "https://x.com/arcaxio",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-base-300 stroke-[1.5px]" />
      ),
      href: "https://github.com/Arcaxio",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-base-300 stroke-[1.5px]" />
      ),
      href: "https://www.linkedin.com/in/jasper-kueh/",
    },
    {
        title: "Contact",
        icon: (
          <IconMail className="h-full w-full text-base-300 stroke-[1.5px]" />
        ),
        href: "#button-mail",
      },
  ];
  return (
    <div className="h-[4rem] m-2">
      <Popdown items={links}/>
    </div>
  );
}