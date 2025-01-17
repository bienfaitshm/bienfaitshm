"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { ContactExternalLink } from "@/components/contact-external-link";
import { useState } from "react";

export type TConctact = { name: string; href: string; icon: React.ReactNode };

export type HoverEffectProps = {
  contacts: TConctact[];
};

export const HoverEffect: React.FC<
  HoverEffectProps &
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >
> = ({ contacts, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn("flex items-center gap-4", className)}>
      {contacts.map((contact, idx) => (
        <Link
          href={contact.href}
          key={contact.href}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <ContactExternalLink icon={contact.icon} name={contact.name} />
        </Link>
      ))}
    </div>
  );
};
