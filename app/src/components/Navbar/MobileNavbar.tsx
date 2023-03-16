import { CloseIcon } from "@/assets/icons";
import clsx from "clsx";
import NavLinks from "./NavLinks";

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
        className="flex flex-col justify-around gap-10 font-poppins font-semibold text-3xl text-center"
        onClick={() => setOpen(false)}
      >
        <NavLinks/>
      </ul>
    </div>
  );
};

export default MobileNavbar;
