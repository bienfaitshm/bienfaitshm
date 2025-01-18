import {
  TypographyH1,
  TypographyH3,
  TypographyH4,
  TypographyMuted,
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
import { GITHUB, LINKEDIN, X, EMAIL, PHONE_NUMBER } from "@/constants/links";
import type { TConctact } from "@/components/hover-effect";
import { FloatingDock } from "@/components/ui/floating-dock";
import Image from "next/image";
import { CopieClipboardText } from "@/components/text-copie-clipboard";

const contacts: (TConctact & { value?: string })[] = [
  {
    name: "Email",
    icon: <EnvelopeClosedIcon className="h-7 w-7" />,
    href: `mailto:${EMAIL}`,
    value: EMAIL,
  },
  {
    name: "WhatsApp",
    icon: <Smartphone className="h-7 w-7" />,
    href: `tel:${PHONE_NUMBER}`,
    value: PHONE_NUMBER,
  },
  {
    name: "LinkedIn",
    icon: <LinkedInLogoIcon className="h-7 w-7" />,
    href: LINKEDIN,
    value: LINKEDIN,
  },
  {
    name: "Github",
    icon: <GitHubLogoIcon className="h-7 w-7" />,
    href: GITHUB,
    value: GITHUB,
  },
  {
    name: "X",
    icon: <TwitterLogoIcon className="h-7 w-7" />,
    href: X,
    value: X,
  },
];

export default function Home() {
  return (
    <div className="md:mt-20 mt-5 mb-20">
      <main className="mx-auto max-w-screen-lg space-y-20">
        <section className="space-y-10">
          <div className="flex flex-col items-center gap-3">
            <Avatar className="h-40 w-40">
              <AvatarImage src="/avatar.jpg" alt="bienfait shomari" />
              <AvatarFallback>BF</AvatarFallback>
            </Avatar>
            <TypographyH4 className="text-neutral-700 dark:text-neutral-300 ">
              {MESSAGES.great_name}
            </TypographyH4>
          </div>
          <TypographyH1 className="main-title text-center bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-neutral-900/70 to-neutral-900 dark:from-white dark:to-white/60">
            {MESSAGES.message_strategry}
          </TypographyH1>
        </section>
        <section className="flex items-center justify-center gap-7">
          <FloatingDock
            items={contacts.map((contact) => ({
              ...contact,
              title: contact.name,
            }))}
          />
        </section>
        <section id="about" className="mt-20">
          <div className="flex flex-col lg:flex-row  justify-between gap-10">
            <div className="space-y-4">
              <div className="space-y-3">
                <TypographyH1 className="font-bold text-neutral-700 dark:text-neutral-300 ">
                  I am a web and mobile developer,
                </TypographyH1>
                <TypographyMuted className="text-md">
                  with a strong sensitivity to user experience.
                </TypographyMuted>
              </div>
              <TypographyP className="text-justify">
                {MESSAGES.aboutme}
              </TypographyP>
            </div>
            <Image
              className="rounded-xl w-full"
              alt="developer"
              src="/about2.png"
              width={300}
              height={140}
            />
          </div>
        </section>
        <section id="skills">
          <div>
            <TypographyH1>Skills</TypographyH1>
            <TypographyP>
              Specialized in cross-platform application development. Expertise
              in Python (Django), React, Next.js and React Native, as well as
              REST API design and PostgreSQL databases. I have worked on various
              projects, ranging from complex web applications to native mobile
              applications. And here is my stack
            </TypographyP>
          </div>
        </section>
        <section id="contacts" className="space-y-5">
          <div>
            <TypographyH3 className="text-4xl font-bold text-neutral-700 dark:text-neutral-300 ">
              Contacts
            </TypographyH3>
            <TypographyP>
              If you need more information, please do not hesitate to contact
              me. I will respond to you as quickly as possible.
            </TypographyP>
          </div>

          <div className="grid grid-cols-3 gap-5">
            {contacts.map((contact, index) => (
              <div
                key={index}
                className="bg-purple-600 rounded-md p-5 text-neutral-200 relative overflow-hidden cursor-pointer hover:scale-105 transition-transform"
              >
                <TypographyH4>{contact.name}</TypographyH4>
                <div>
                  <CopieClipboardText text={contact?.value || ""} />
                </div>
                <div className="absolute -top-5 right-2 p-3 rounded-full bg-purple-900">
                  {contact.icon}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
