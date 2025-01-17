// import Image from "next/image";
// import { TypographyH1, TypographyH4 } from "@/components/ui/typography";

import { HeroHighlightDemo } from "@/components/bg";

export default function Home() {
  return (
    <HeroHighlightDemo />
    // <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
    //   {/* Radial gradient for the container to give a faded look */}
    //   <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    //   <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
    //     Backgrounds
    //   </p>
    // </div>
    // <div className=" my-5">
    //   <main className="mx-auto max-w-screen-md flex flex-col items-center gap-5">
    //     <Image
    //       className="rounded-full"
    //       src="/avatar.jpg"
    //       alt="Next.js logo"
    //       width={180}
    //       height={38}
    //       priority
    //     />
    //     <TypographyH4>Hi!, I&apos;m Bienfait shomari.</TypographyH4>
    //     <TypographyH1 className="text-center">
    //       Building digital products, brands, and experience.
    //     </TypographyH1>
    //   </main>
    // </div>
  );
}
