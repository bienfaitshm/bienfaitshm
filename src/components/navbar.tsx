import {
  House,
  Contact,
  ChartNoAxesCombined,
  Grid2x2CheckIcon,
} from "lucide-react";
import { Link } from "next-view-transitions";
import ButtonTheme from "./button-theme";
import { NavbarMobile, type TMenu } from "./navbar-mobile";
import { cn } from "@/lib/utils";

/**
 * contacts
 * experiences
 * competances
 * @returns
 */

const menus: TMenu[] = [
  { title: "Contacts", href: "/#contact", icon: <Contact /> },
  { title: "Experiences", href: "/skills", icon: <Grid2x2CheckIcon /> },
  { title: "Competances", href: "/#contact", icon: <ChartNoAxesCombined /> },
];

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between max-w-screen-xl mx-auto px-2 py-5">
      <div>
        <Link
          href="/"
          className="flex items-center bg-muted p-4 md:py-2 md:px-5 rounded-full font-medium scale-100 hover:scale-105 transition-all"
        >
          <House className="md:mr-2 h-4 w-4" />
          <span className="hidden md:block">Bienfaitshm</span>
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <div className="hidden md:flex items-center gap-2 bg-muted py-2 px-5 rounded-full font-medium cursor-pointer">
          {menus.map((menu, index) => (
            <Link
              key={menu.href}
              href={menu.href}
              className={cn("px-2", index !== 0 && "border-l-2")}
            >
              {menu.title}
            </Link>
          ))}
        </div>
        <ButtonTheme />
        <NavbarMobile menus={menus} />
      </div>
    </nav>
  );
};

export default Navbar;
