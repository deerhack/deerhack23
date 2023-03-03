import Link from "next/link";
import Image from "next/image";
import { DeerhackLogo } from "@/assets/images";

const Navbar = () => {
  return (
    <nav className="flex justify-between container mx-auto p-5 items-center">
      <div>
        <DeerhackLogo width={50} height={50} />
      </div>
      <ul className="flex flex-row justify-around gap-10 font-poppins font-semibold">
        <li>
          <Link href="#">About</Link>
        </li>
        <li>
          <Link href="#">Tracks</Link>
        </li>
        <li>
          <Link href="#">Prizes</Link>
        </li>
        <li>
          <Link href="#">FAQ</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
