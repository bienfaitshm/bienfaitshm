import { Separator } from "./ui/separator";
import { TypographyH2 } from "./ui/typography";

export const Footer = () => {
  return (
    <div>
      <div className="mx-auto max-w-screen-lg p-2">
        <TypographyH2>Bienfait shomari</TypographyH2>
      </div>
      <Separator />
      <div className="mx-auto max-w-screen-md py-5 flex justify-center items-center">
        © 2025 Bienfait shomari Tous droits réservés.
      </div>
    </div>
  );
};
