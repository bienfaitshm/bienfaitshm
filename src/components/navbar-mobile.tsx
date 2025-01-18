import { cn } from "@/lib/utils";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export interface TMenu {
  title: string;
  icon: React.ReactNode;
  href: string;
}
export interface NavbarMobileProps {
  menus: TMenu[];
  className?: string;
}
export const NavbarMobile: React.FC<NavbarMobileProps> = ({
  menus,
  className,
}) => {
  return (
    <div className={cn("relative block md:hidden", className)}>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Menus</SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>
          <div className="space-y-2 text-neutral-800 dark:text-neutral-300">
            {menus.map((menu) => (
              <Link
                key={menu.href}
                href={menu.href}
                className="flex items-center gap-2"
              >
                {menu.icon}
                <span className="ml-1">{menu.title}</span>
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};
