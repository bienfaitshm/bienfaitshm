import {
  TypographyH1,
  TypographyH4,
  TypographyP,
} from "@/components/ui/typography";
import {
  LinkedInLogoIcon,
  GitHubLogoIcon,
  EnvelopeClosedIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { Smartphone } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MESSAGES } from "@/lib/texts";
// import { ContactExternalLink } from "@/components/contact-external-link";
import { GITHUB, LINKEDIN, X, EMAIL, PHONE_NUMBER } from "@/constants/links";
import type { TConctact } from "@/components/hover-effect";
import { FloatingDock } from "@/components/ui/floating-dock";
// import { GreatName } from "@/components/great-name-text";

// import { HeroHighlightDemo } from "@/components/bg";

const contacts: TConctact[] = [
  {
    name: "Email",
    icon: <EnvelopeClosedIcon className="h-7 w-7" />,
    href: `mailto:${EMAIL}`,
  },
  {
    name: "WhatsApp",
    icon: <Smartphone className="h-7 w-7" />,
    href: `tel:${PHONE_NUMBER}`,
  },
  {
    name: "LinkedIn",
    icon: <LinkedInLogoIcon className="h-7 w-7" />,
    href: LINKEDIN,
  },
  {
    name: "Github",
    icon: <GitHubLogoIcon className="h-7 w-7" />,
    href: GITHUB,
  },
  {
    name: "X",
    icon: <TwitterLogoIcon className="h-7 w-7" />,
    href: `tel:${X}`,
  },
];

export default function Home() {
  return (
    <div className="md:mt-20 my-5">
      <main className="mx-auto max-w-screen-md space-y-14">
        <section className="space-y-10">
          <div className="flex flex-col items-center gap-3">
            <Avatar className="h-40 w-40">
              <AvatarImage src="/avatar.jpg" alt="bienfait shomari" />
              <AvatarFallback>BF</AvatarFallback>
            </Avatar>
            <TypographyH4>{MESSAGES.great_name}</TypographyH4>
          </div>
          <TypographyH1 className="text-center bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-neutral-900/70 to-neutral-900 dark:from-white dark:to-white/60">
            {MESSAGES.message_strategry}
          </TypographyH1>
        </section>
        <section
          id="contacts"
          className="flex items-center justify-center gap-7"
        >
          <FloatingDock
            items={contacts.map((contact) => ({
              ...contact,
              title: contact.name,
            }))}
          />
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
