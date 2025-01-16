// import { HomeIcon } from "@radix-ui/react-icons";
import { House } from "lucide-react";
import { Link } from "next-view-transitions";

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
      <div></div>
    </nav>
  );
};

export default Navbar;
