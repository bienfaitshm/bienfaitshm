import Image from "next/image";
import { TypographyH1, TypographyH4 } from "@/components/ui/typography";

export default function Home() {
  return (
    <div className=" my-5">
      <main className="mx-auto max-w-screen-md flex flex-col items-center gap-5">
        <Image
          className="rounded-full"
          src="/avatar.jpg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <TypographyH4>Hi!, I&apos;m Bienfait shomari</TypographyH4>
        <TypographyH1 className="text-center">
          Buiding digital products, brands, and experience.
        </TypographyH1>
      </main>
    </div>
  );
}
