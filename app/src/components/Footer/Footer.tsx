import { FbIcon, InstaIcon } from "@/assets/icons";
import DiscordIcon from "@/assets/icons/DiscordIcon";
import { DeerhackLogo } from "@/assets/images";

type Props = {
  socialLinks: PageData["socialLinks"];
};

const Footer = ({ socialLinks }: Props) => {
  return (
    <div className="p-5 bg-color-5 w-full">
      <div className="flex flex-col lg:flex-row justify-between container mx-auto gap-y-10 lg:mt-10">
        <div>
          <DeerhackLogo width={80} height={80} />
          <h3 className="font-mont text-xl md:text-3xl font-bold mt-7 text-white">
            DeerHack 2023
          </h3>
          <div className="font-poppins md:text-xl font-medium text-white mt-6">
            Email:{" "}
            <a
              href="mailto:softwareclub@deerwalk.edu.np"
              className="text-primary"
            >
              softwareclub@deerwalk.edu.np
            </a>
          </div>
          <div className="font-poppins md:text-xl font-medium text-white mt-3">
            Contact:{" "}
            <a href="tel:+9779899989901" className="text-primary">
              +977 989-998-9901,{" "}
            </a>{" "}
            <a href="tel:+9779812971200" className="text-primary">
              +977 981-297-1200
            </a>
          </div>
        </div>
        <div>
          <div className="flex flex-row gap-5 justify-start lg:justify-center items-center h-[80px]">
            <a href={socialLinks.facebook}>
              <FbIcon />
            </a>
            <a href={socialLinks.instagram}>
              <InstaIcon />
            </a>
            <a href={socialLinks.discord}>
              <DiscordIcon />
            </a>
          </div>
          <div className="font-mont font-bold text-white text-xl md:text-4xl mt-7">
            Event Summary
          </div>
          <div className="font-poppins md:text-xl font-medium text-white mt-3">
            Mode: <span className="text-primary">In-Person</span>
          </div>
          <div className="font-poppins md:text-xl font-medium text-white mt-3">
            Date: <span className="text-primary">5th - 7th May, 2023</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto border-t-2 border-gray-600 mt-10"></div>
      <div className="text-white font-poppins font-bold lg:text-xl mt-10 text-center">
        All Rights Reserved ©{" "}
        <span className="text-primary">DeerHack 2023</span>
      </div>
    </div>
  );
};

export default Footer;
