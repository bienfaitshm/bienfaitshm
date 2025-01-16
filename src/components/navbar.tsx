// import { HomeIcon } from "@radix-ui/react-icons";
import { House } from "lucide-react";
import { Link } from "next-view-transitions";
import ButtonTheme from "./button-theme";
// import {} from "separator"

/**
 * contacts
 * experiences
 * competances
 * @returns
 */

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between max-w-screen-xl mx-auto p-5">
      <div>
        <Link
          href="/"
          className="flex items-center bg-muted py-2 px-5 rounded-full font-medium scale-100 hover:scale-105 transition-all"
        >
          <House className="mr-2 h-5 w-5" />
          <span>Bienfaitshm</span>
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2 bg-muted py-2 px-5 rounded-full font-medium cursor-pointer">
          <Link href="#contact">Contacts</Link>
          <Link href="#contact" className="border-l-2 border-r-2 px-2">
            Competances
          </Link>
          <Link href="#contact">Experiances</Link>
        </div>
        <ButtonTheme />
      </div>
    </nav>
  );
};

export default Navbar;
