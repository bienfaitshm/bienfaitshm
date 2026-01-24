import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { TypographyH4, TypographyMuted } from "@/components/ui/typography";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { CopieClipboardText } from "./text-copie-clipboard";
import { TConctact } from "./hover-effect";

export function ContactGrid({ contacts }: { contacts: (TConctact & { value: string })[] }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contacts.map((contact, index) => (
                <Card
                    key={index}
                    className="group relative overflow-hidden border-neutral-200 dark:border-neutral-800 bg-card hover:shadow-md hover:border-primary/40 transition-all duration-300"
                >
                    {/* Subtle Background Glow on Hover */}
                    <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />

                    <CardContent className="p-5 flex flex-col justify-between h-full space-y-4">
                        <div className="flex items-start justify-between">
                            {/* Icon Container with semantic background */}
                            <div className="p-3 bg-neutral-100 dark:bg-neutral-900 rounded-xl text-neutral-600 dark:text-neutral-400 group-hover:text-primary group-hover:scale-110 transition-all duration-300">
                                {contact.icon}
                            </div>

                            {/* Action: Open Link */}
                            <a
                                href={contact.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 text-neutral-400 hover:text-primary hover:bg-primary/10 rounded-full transition-all"
                                aria-label={`Open ${contact.name}`}
                            >
                                <ExternalLink className="w-4 h-4" />
                            </a>
                        </div>

                        <div className="space-y-1.5">
                            <TypographyH4 className="text-sm font-bold tracking-tight uppercase text-neutral-500 dark:text-neutral-400">
                                {contact.name}
                            </TypographyH4>

                            <div className="flex items-center justify-between group/text">
                                <TypographyMuted className="text-foreground font-medium truncate pr-2">
                                    {contact.value}
                                </TypographyMuted>

                                {/* Refined Copy Action */}
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <div className="opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity">
                                                <CopieClipboardText
                                                    text={contact.value}
                                                    className="h-8 w-8 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                                                />
                                            </div>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Copy to clipboard</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}