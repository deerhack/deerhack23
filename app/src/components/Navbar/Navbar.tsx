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
          <a href="/#about">About</a>
        </li>
        <li>
          <a href="/#tracks">Tracks</a>
        </li>
        <li>
          <a href="/#prizes">Prizes</a>
        </li>
        <li>
          <a href="/#faq">FAQ</a>
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
