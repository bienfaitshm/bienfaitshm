"use client";
import { Button } from "@/components/ui/button";
import { SunMedium, Moon } from "lucide-react";
import { useTheme } from "next-themes";

enum Theme {
  LIGHT = "light",
  DARK = "dark",
  SUSTEM = "system",
}

const ButtonTheme: React.FC = () => {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      variant="ghost"
      size="icon"
      className="rounded-full"
      onClick={() =>
        setTheme((value) => (value === Theme.DARK ? Theme.LIGHT : Theme.DARK))
      }
    >
      {theme === Theme.DARK ? <Moon /> : <SunMedium />}
    </Button>
  );
};

export default ButtonTheme;
