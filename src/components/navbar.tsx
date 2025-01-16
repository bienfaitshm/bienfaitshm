// import { HomeIcon } from "@radix-ui/react-icons";
import { House } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between max-w-screen-xl mx-auto p-5">
      <div>
        <Link
          href="/"
          className="flex items-center bg-muted py-3 px-5 rounded-full font-bold"
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
