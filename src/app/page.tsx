import {
  TypographyH1,
  TypographyH4,
  TypographyMuted,
  TypographyP,
} from "@/components/ui/typography";
import {
  LinkedInLogoIcon,
  GitHubLogoIcon,
  EnvelopeClosedIcon,
  TwitterLogoIcon,
  ExternalLinkIcon,
} from "@radix-ui/react-icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MESSAGES } from "@/lib/texts";
// import { GreatName } from "@/components/great-name-text";

// import { HeroHighlightDemo } from "@/components/bg";

export default function Home() {
  return (
    <div className="md:mt-20 my-5">
      <main className="mx-auto max-w-screen-md space-y-6">
        <section className="space-y-10">
          <div className="flex flex-col items-center gap-3">
            <Avatar className="h-40 w-40">
              <AvatarImage src="/avatar.jpg" alt="bienfait shomari" />
              <AvatarFallback>BF</AvatarFallback>
            </Avatar>
            <TypographyH4>{MESSAGES.great_name}</TypographyH4>
          </div>
          <TypographyH1 className="text-center dark:text-neutral-300">
            {MESSAGES.message_strategry}
          </TypographyH1>
        </section>
        <section id="contacts" className="flex items-center justify-center">
          <div className="relative cursor-pointer flex flex-col items-center">
            <LinkedInLogoIcon className="h-10 w-10" />
            <div className="flex items-center gap-2">
              <TypographyMuted>Github</TypographyMuted>
              <ExternalLinkIcon />
            </div>
          </div>
        </section>
        <section>
          <div>
            <TypographyP>{MESSAGES.aboutme}</TypographyP>
          </div>
        </section>
      </main>
    </div>
  );
}
