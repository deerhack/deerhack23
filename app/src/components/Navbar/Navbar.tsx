import Link from "next/link";
import Image from "next/image";
import { DeerhackLogo } from "@/assets/images";

const Navbar = () => {
  return (
    <nav className="flex justify-between container mx-auto p-5 items-center">
      <Link href={"/"}>
        <DeerhackLogo width={50} height={50} />
      </Link>
      <ul className="flex flex-row justify-around gap-10 font-poppins font-semibold">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#tracks">Tracks</a>
        </li>
        <li>
          <a href="#prizes">Prizes</a>
        </li>
        <li>
          <a href="#faq">FAQ</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
