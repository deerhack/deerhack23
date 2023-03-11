import { CloseIcon } from "@/assets/icons";
import clsx from "clsx";

type Props = {
  setOpen: Function;
};

const MobileNavbar = ({ setOpen }: Props) => {
  return (
    <div className="fixed inset-0 bg-black/95 grid place-content-center">
      <span className="absolute right-5 top-5" onClick={() => setOpen(false)}>
        <CloseIcon />
      </span>

      <ul
        className="flex flex-col justify-around gap-10 font-poppins font-semibold text-3xl"
        onClick={() => setOpen(false)}
      >
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
    </div>
  );
};

export default MobileNavbar;
