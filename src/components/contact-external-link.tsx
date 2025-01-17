import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { TypographyMuted } from "@/components/ui/typography";
import Link from "next/link";

interface ContactExternalLinkProps {
  name: string;
  icon: React.ReactNode;
  href: string;
}
export const ContactExternalLink: React.FC<ContactExternalLinkProps> = ({
  icon,
  name,
  href,
}) => {
  return (
    <Link
      href={href}
      className="relative cursor-pointer flex flex-col items-center"
    >
      {icon}
      <div className="flex items-center gap-2">
        <TypographyMuted>{name}</TypographyMuted>
        <ExternalLinkIcon />
      </div>
    </Link>
  );
};
