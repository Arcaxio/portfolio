import { FocusCards } from "@/components/ui/focus-cards";

export function FocusCardsDemo() {
  const cards = [
    {
      title: "Project 01",
      src: "/mockup1.png",
      link: "/projects"
    },
    {
      title: "FYP Project",
      src: "/arduino.jpg",
      link: "/fypproject"
    },
    {
      title: "More to come",
      src: "/logo.png",
      link: ""
    }
  ];

  return <FocusCards cards={cards} />;
}
