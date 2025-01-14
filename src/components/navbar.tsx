import { HomeIcon } from "@radix-ui/react-icons";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between">
      <div>
        <Link href="/">
          <HomeIcon />
        </Link>
      </div>
      <div></div>
    </nav>
  );
};

export default Navbar;
