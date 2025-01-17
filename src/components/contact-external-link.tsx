import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { TypographyMuted } from "@/components/ui/typography";

interface ContactExternalLinkProps {
  name: string;
  icon: React.ReactNode;
}
export const ContactExternalLink: React.FC<ContactExternalLinkProps> = ({
  icon,
  name,
}) => {
  return (
    <>
      {icon}
      <div className="flex items-center gap-2">
        <TypographyMuted>{name}</TypographyMuted>
        <ExternalLinkIcon />
      </div>
    </>
  );
};
