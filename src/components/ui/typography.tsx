import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import type { DetailedHTMLProps, HTMLAttributes, BlockquoteHTMLAttributes } from "react";

const TypographyH1 = forwardRef<
  HTMLHeadingElement,
  DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h1
    ref={ref}
    className={cn("scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl", className)}
    {...props}
  />
));
TypographyH1.displayName = "TypographyH1";

const TypographyH2 = forwardRef<
  HTMLHeadingElement,
  DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn("scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0", className)}
    {...props}
  />
));
TypographyH2.displayName = "TypographyH2";

const TypographyH3 = forwardRef<
  HTMLHeadingElement,
  DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("scroll-m-20 text-2xl font-semibold tracking-tight", className)}
    {...props}
  />
));
TypographyH3.displayName = "TypographyH3";

const TypographyH4 = forwardRef<
  HTMLHeadingElement,
  DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h4
    ref={ref}
    className={cn("scroll-m-20 text-xl font-semibold tracking-tight", className)}
    {...props}
  />
));
TypographyH4.displayName = "TypographyH4";

const TypographyP = forwardRef<
  HTMLParagraphElement,
  DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn("leading-7 [&:not(:first-child)]:mt-6", className)} {...props} />
));
TypographyP.displayName = "TypographyP";

const TypographyBlockquote = forwardRef<
  HTMLQuoteElement,
  DetailedHTMLProps<BlockquoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>
>(({ className, ...props }, ref) => (
  <blockquote
    ref={ref}
    className={cn("mt-6 border-l-2 pl-6 italic text-muted-foreground", className)}
    {...props}
  />
));
TypographyBlockquote.displayName = "TypographyBlockquote";

const TypographyLead = forwardRef<
  HTMLParagraphElement,
  DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn("text-xl text-muted-foreground", className)} {...props} />
));
TypographyLead.displayName = "TypographyLead";

const TypographyLarge = forwardRef<
  HTMLDivElement,
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("text-lg font-semibold", className)} {...props} />
));
TypographyLarge.displayName = "TypographyLarge";

const TypographySmall = forwardRef<
  HTMLElement,
  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
>(({ className, ...props }, ref) => (
  <small ref={ref} className={cn("text-sm font-medium leading-none", className)} {...props} />
));
TypographySmall.displayName = "TypographySmall";

const TypographyMuted = forwardRef<
  HTMLParagraphElement,
  DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
));
TypographyMuted.displayName = "TypographyMuted";

export {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
  TypographyBlockquote,
  TypographyLead,
  TypographyLarge,
  TypographyMuted,
  TypographySmall,
};