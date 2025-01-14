import { HomeIcon } from "@radix-ui/react-icons";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between max-w-screen-xl mx-auto p-5">
      <div>
        <Link href="/" className="flex items-center bg-muted p-3 rounded-full">
          <HomeIcon className="mr-2 font-bold" />
          <span>Bienfaitshm</span>
        </Link>
      </div>
      <div></div>
    </nav>
  );
};

export default Navbar;
