import Link from "next/link";
import { DeerhackLogo } from "@/assets/images";
import { HamburgerIcon } from "@/assets/icons";
import { useState } from "react";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex justify-between container mx-auto p-5 items-center bg-transparent">
      <Link href={"/"}>
        <DeerhackLogo width={50} height={50} />
      </Link>
      <ul className="lg:flex flex-row justify-around gap-10 font-poppins font-semibold hidden">
        <li>
          <Link href="/#about" scroll={false}>About</Link>
        </li>
        <li>
          <Link href="/#tracks" scroll={false}>Tracks</Link>
        </li>
        <li>
          <Link href="/#prizes" scroll={false}>Prizes</Link>
        </li>
        <li>
          <Link href="/#faq" scroll={false}>FAQ</Link>
        </li>
        <li>
          <Link href={"/code-of-conduct"}>
            Code of Conduct
          </Link>
        </li>
      </ul>
      <button className="lg:hidden" onClick={() => setOpen(!open)}>
        <HamburgerIcon />
      </button>
      {open && <MobileNavbar setOpen={setOpen} />}
    </nav>
  );
};

export default Navbar;
