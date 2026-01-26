"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import { TypographyH3, TypographyP, TypographySmall } from "./typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image"; // Si tu es sur Next.js

interface TimelineEntry {
  title: string;
  subtitle?: string;
  projectTitle: string;
  description: string;
  href: string;
  tags?: string[]; // Ajouté pour la tech stack
  images?: string[]; // Ajouté pour l'aperçu
  content?: React.ReactNode;
}

// Sous-composant pour l'aperçu visuel
const ProjectPreview = ({ images, tags }: { images?: string[], tags?: string[] }) => {
  if (!images || images.length === 0) return null;

  return (
    <div className="space-y-4">
      {/* Grille d'images interactive */}
      <div className={`grid gap-4 ${images.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
        {images.map((src, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 aspect-video group/img"
          >
            <Image
              src={src}
              alt="Project preview"
              fill
              className="object-cover transition-transform duration-500 group-hover/img:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity" />
          </div>
        ))}
      </div>

      {/* Tags de technos */}
      {tags && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-[10px] font-medium uppercase tracking-widest bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded-md border border-neutral-200 dark:border-neutral-700"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  const updateHeight = useCallback(() => {
    if (timelineRef.current) {
      setHeight(timelineRef.current.scrollHeight);
    }
  }, []);

  useEffect(() => {
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [updateHeight, data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 90%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const heightTransform = useTransform(smoothProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(smoothProgress, [0, 0.1], [0, 1]);

  return (
    <div ref={containerRef} className="w-full font-sans md:px-10">
      <div ref={timelineRef} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-12 md:pt-32 md:gap-10 group">

            {/* --- SECTION GAUCHE (Sticky Title) --- */}
            <div className="sticky flex flex-col md:flex-row z-40 top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-background flex items-center justify-center shadow-sm border border-neutral-200 dark:border-neutral-800 transition-colors group-hover:border-primary">
                <div className="h-3 w-3 rounded-full bg-neutral-300 dark:bg-neutral-700 group-hover:bg-primary transition-all duration-300 group-hover:scale-125" />
              </div>

              <div className="hidden md:block md:pl-20">
                <TypographyH3 className="text-2xl lg:text-4xl font-bold text-neutral-400 dark:text-neutral-600 transition-colors group-hover:text-foreground">
                  {item.title}
                </TypographyH3>
                {item.subtitle && (
                  <TypographySmall className="text-neutral-500 mt-1 block uppercase tracking-wider font-semibold">
                    {item.subtitle}
                  </TypographySmall>
                )}
              </div>
            </div>

            {/* --- SECTION DROITE (Project Card) --- */}
            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-2 text-left font-bold text-neutral-400 group-hover:text-foreground transition-colors">
                {item.title}
              </h3>

              <Link
                href={item.href}
                target="_blank"
                className="block p-6 rounded-3xl border border-transparent hover:border-neutral-200 dark:hover:border-neutral-800 hover:bg-white dark:hover:bg-neutral-900/50 hover:shadow-2xl hover:shadow-neutral-200/50 dark:hover:shadow-none transition-all duration-500 group/card"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                      <TypographyH3 className="text-xl md:text-3xl font-bold flex items-center gap-2">
                        {item.projectTitle}
                        <ArrowUpRight className="w-6 h-6 opacity-0 -translate-y-2 translate-x-2 group-hover/card:opacity-100 group-hover/card:translate-y-0 group-hover/card:translate-x-0 transition-all duration-300 text-primary" />
                      </TypographyH3>
                      <TypographyP className="text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
                        {item.description}
                      </TypographyP>
                    </div>
                  </div>

                  {/* Affichage des images et tags */}
                  <ProjectPreview images={item.images} tags={item.tags} />

                  {item.content && (
                    <div className="mt-4">
                      {item.content}
                    </div>
                  )}
                </div>
              </Link>
            </div>
          </div>
        ))}

        {/* --- LIGNE DE PROGRESSION --- */}
        <div
          style={{ height: height + "px" }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-neutral-200 dark:bg-neutral-800 [mask-image:linear-gradient(to_bottom,transparent_0%,black_5%,black_95%,transparent_100%)]"
        >
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute inset-x-0 top-0 w-full bg-gradient-to-t from-blue-600 via-purple-500 to-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  );
};