import React from "react";
import { TypographyH1, TypographyP } from "@/components/ui/typography";
import { TimelineContainer } from "@/components/time-liner-container";

export default function TabsDemo() {
  return (
    <div className="space-y-4 mx-auto max-w-screen-lg my-10 w-full bg-background dark:bg-neutral-950 font-sans md:px-10">
      <div className="pt-10 px-4 md:px-8 lg:px-10 space-y-3">
        <TypographyH1 className="main-title text-center bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-neutral-900/70 to-neutral-900 dark:from-white dark:to-white/60">
          Experiances
        </TypographyH1>
        <TypographyP className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
          I&apos;ve been working on Aceternity for the past 2 years. Here&apos;s
          a timeline of my journey.
        </TypographyP>
      </div>
      <TimelineContainer />
    </div>
  );
}
