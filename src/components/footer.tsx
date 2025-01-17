"use client";
import { TypographyH2 } from "./ui/typography";

export const Footer = () => {
  const years = new Date();
  return (
    <div>
      <div>
        <TypographyH2>Bienfait shomari</TypographyH2>
      </div>
      <div>© {years.getFullYear()} Bienfait shomari Tous droits réservés.</div>
    </div>
  );
};
