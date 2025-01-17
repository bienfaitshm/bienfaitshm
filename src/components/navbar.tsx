// import { HomeIcon } from "@radix-ui/react-icons";
import { House, Contact } from "lucide-react";
import { Link } from "next-view-transitions";
import ButtonTheme from "./button-theme";
import { NavbarMobile, type TMenu } from "./ui/navbar-mobile";
// import {} from "separator"

/**
 * contacts
 * experiences
 * competances
 * @returns
 */

const menus: TMenu[] = [
  { title: "Contacts", href: "/#contact", icon: <Contact /> },
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
          <Link href="#contact">Contacts</Link>
          <Link href="#contact" className="border-l-2 border-r-2 px-2">
            Competances
          </Link>
          <Link href="/skills">Experiances</Link>
        </div>
        <ButtonTheme />
        <NavbarMobile menus={menus} />
      </div>
    </nav>
  );
};

export default Navbar;
