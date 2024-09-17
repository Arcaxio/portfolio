import { cn } from "@/utils/cn";
import {
  IconLayoutNavbarCollapse,
  IconMenu2,
  IconX,
} from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export const Popdown = ({
  items,
  mobileClassName,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  mobileClassName?: string;
}) => {
  return (
    <>
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

const FloatingDockMobile = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={cn("relative block", className)}>
      <motion.button
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        onClick={() => setOpen(!open)}
        className="btn btn-primary btn-circle btn-lg mb-2"
      >
        {open ? (
          <IconX className="h-8 w-8 text-base-300" />
        ) : (
          <IconMenu2 className="h-8 w-8 text-base-300" />
        )}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="absolute top-full mt-2 inset-x-0 flex flex-col-reverse items-center gap-4"
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: -10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -10,
                  transition: {
                    delay: idx * 0.05,
                  },
                }}
                transition={{ delay: (items.length - 1 - idx) * 0.05 }}
              >
                <Link
                  href={item.href}
                  key={item.title}
                  className="btn btn-primary btn-circle"
                >
                  <div className="h-8 w-8">{item.icon}</div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
