"use client";
import { cn } from "@/lib/utils";
// import { LayoutGrid } from "lucide-react";
import {
  AnimatePresence,
  motion,
  //   useMotionValue,
  //   useSpring,
  //   useTransform,
} from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "./button";
import { TypographySmall } from "./typography";

export interface TMenu {
  title: string;
  icon: React.ReactNode;
  href: string;
}
export interface NavbarMobileProps {
  menus: TMenu[];
  className?: string;
}
export const NavbarMobile: React.FC<NavbarMobileProps> = ({
  menus,
  className,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={cn("relative block md:hidden", className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="absolute top-full mb-2 bottom-2 right-0 flex flex-col gap-2"
          >
            {menus.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: 10,
                  transition: {
                    delay: idx * 0.05,
                  },
                }}
                transition={{ delay: (menus.length - 1 - idx) * 0.05 }}
              >
                <Link
                  href={item.href}
                  key={item.title}
                  className="w-full flex items-center gap-2"
                >
                  {item.icon}
                  <TypographySmall>{item.title}</TypographySmall>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full"
        onClick={() => setOpen(!open)}
      >
        <Menu />
      </Button>
    </div>
  );
};
