import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
} from "@/components/ui/typography";
import {
  LinkedInLogoIcon,
  GitHubLogoIcon,
  EnvelopeClosedIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { PhoneCall, Bot, BrainCircuit, Terminal, Layers } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MESSAGES } from "@/lib/texts";
import { GITHUB, LINKEDIN, X, EMAIL, PHONE_NUMBER } from "@/constants/links";
import type { TConctact } from "@/components/hover-effect";
import { FloatingDock } from "@/components/ui/floating-dock";
import Image from "next/image";
import { SkillsSection } from "@/components/sections/skills";
import { Separator } from "@/components/ui/separator";
import { ContactGrid } from "@/components/contact-sections";

// Typage strict pour les contacts
const contacts: (TConctact & { value: string })[] = [
  {
    name: "Email",
    icon: <EnvelopeClosedIcon className="h-6 w-6" />,
    href: `mailto:${EMAIL}`,
    value: EMAIL,
  },
  {
    name: "WhatsApp",
    icon: <PhoneCall className="h-6 w-6" />,
    href: `tel:${PHONE_NUMBER}`,
    value: PHONE_NUMBER,
  },
  {
    name: "LinkedIn",
    icon: <LinkedInLogoIcon className="h-6 w-6" />,
    href: LINKEDIN,
    value: LINKEDIN,
  },
  {
    name: "Github",
    icon: <GitHubLogoIcon className="h-6 w-6" />,
    href: GITHUB,
    value: GITHUB,
  },
  {
    name: "X",
    icon: <TwitterLogoIcon className="h-6 w-6" />,
    href: X,
    value: X,
  },
];

export default function Home() {
  return (
    <div className="md:mt-20 mt-10 mb-20 px-4">
      <main className="mx-auto max-w-4xl space-y-24">

        {/* --- HERO SECTION --- */}
        <section className="space-y-8 text-center">
          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              <Avatar className="h-40 w-40 border-4 border-neutral-100 dark:border-neutral-800 shadow-xl">
                <AvatarImage src="/avatar.jpg" alt="Bienfait Shomari" />
                <AvatarFallback>BS</AvatarFallback>
              </Avatar>
              <div className="absolute bottom-1 right-1 bg-green-500 w-6 h-6 rounded-full border-4 border-white dark:border-neutral-950" title="Open to work" />
            </div>

            <div className="space-y-4">
              <TypographyH4 className="text-neutral-600 dark:text-neutral-400 font-medium tracking-wide uppercase text-sm">
                {MESSAGES.great_name}
              </TypographyH4>
              <TypographyH1 className="pb-4 text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-neutral-900 via-neutral-600 to-neutral-400 dark:from-white dark:via-neutral-300 dark:to-neutral-600">
                Full-Stack Engineer.
              </TypographyH1>
              <TypographyP className="text-xl text-neutral-500 max-w-2xl mx-auto">
                {MESSAGES.message_strategry}
              </TypographyP>
            </div>
          </div>

          <div className="flex justify-center pt-4">
            <FloatingDock
              items={contacts.map((contact) => ({
                ...contact,
                title: contact.name,
              }))}
            />
          </div>
        </section>

        <Separator />

        {/* --- ABOUT SECTION --- */}
        <section id="about" className="scroll-mt-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <Badge variant="outline" className="w-fit">About Me</Badge>
                <TypographyH2 className="text-3xl font-bold">
                  Bridging Web, Mobile & Desktop.
                </TypographyH2>
              </div>

              <TypographyP className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-justify">
                I am a developer who goes beyond just writing code. My expertise lies in <span className="font-semibold text-foreground">Next.js, React Native, and Python (Django/Electron)</span>.
                What sets me apart is my ability to dive into existing codebases to **stabilize, refactor, and maintain** them.
                I bring a mathematical rigor to software architecture, ensuring that the projects I touch are scalable and robust.
              </TypographyP>

              <div className="flex gap-2 flex-wrap">
                {/* Petits tags rapides pour le coup d'œil */}
                {["TypeScript", "Python", "Electron", "React Native"].map(tech => (
                  <Badge key={tech} variant="secondary" className="rounded-sm">{tech}</Badge>
                ))}
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-violet-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative aspect-video overflow-hidden rounded-xl border bg-card">
                <Image
                  className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-105"
                  alt="Developer workspace"
                  src="/about2.png" // Assure-toi que cette image est pro
                  width={600}
                  height={400}
                />
              </div>
            </div>
          </div>
        </section>

        {/* --- AI PHILOSOPHY SECTION (NEW) --- */}
        <section id="ai-philosophy" className="scroll-mt-20">
          <Card className="bg-gradient-to-br from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-950 border-neutral-200 dark:border-neutral-800 overflow-hidden relative">
            <div className="absolute top-0 right-0 p-3 opacity-10">
              <Bot className="w-24 h-24" />
            </div>

            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <BrainCircuit className="w-6 h-6 text-primary" />
                </div>
                <TypographyH3 className="m-0">My Approach to AI</TypographyH3>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="border-l-4 border-primary pl-4 py-1 italic text-lg text-neutral-700 dark:text-neutral-300">
                &quot;I use AI as a Pilot, not an Autopilot.&quot;
              </div>
              <TypographyP>
                In an era of auto-generated code, I stand for <strong>intentional engineering</strong>.
                I treat Artificial Intelligence as a senior reviewer and strategic copilot.
                I do not rely on it to spit out code I don&apos;t understand. Instead, I leverage it to:
              </TypographyP>
              <ul className="grid sm:grid-cols-2 gap-2 text-sm text-neutral-600 dark:text-neutral-400 mt-2">
                <li className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-green-500" /> Review logic & catch edge cases
                </li>
                <li className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-blue-500" /> Optimize architectural patterns
                </li>
                <li className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-purple-500" /> Accelerate unit testing
                </li>
                <li className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-orange-500" /> Refactor legacy code safely
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* --- SKILLS SECTION --- */}
        <section id="skills" className="space-y-8 scroll-mt-20">
          <div className="max-w-2xl">
            <TypographyH2>Technical Arsenal</TypographyH2>
            <TypographyP className="text-neutral-500 mt-2">
              From crafting fluid mobile experiences with <strong>React Native</strong> to building powerful desktop software with <strong>Electron & Python</strong>.
              My stack is designed for versatility and performance.
            </TypographyP>
          </div>
          <SkillsSection />
        </section>

        <Separator />

        {/* --- CONTACT SECTION --- */}
        <section id="contacts" className="space-y-8 scroll-mt-20">
          <div className="text-center space-y-4">
            <TypographyH2>Let&apos;s Collaborate</TypographyH2>
            <TypographyP className="max-w-xl mx-auto text-neutral-500">
              Whether you need to revive an old project or build a complex multi-platform solution from scratch, I&apos;m ready to help.
            </TypographyP>
          </div>
          <ContactGrid contacts={contacts} />
        </section>

      </main>
    </div>
  );
}