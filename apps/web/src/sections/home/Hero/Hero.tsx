import { DiscordLogo } from "@/assets/icons";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "@/assets/images/logo.webp";

type Props = {
  discordUrl: string;
};

const Hero = ({ discordUrl }: Props) => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const finalDate = new Date("2023-05-05");

    setInterval(() => {
      const dt = new Date(Date.now());

      let remainingTime = finalDate.getTime() - dt.getTime();
      remainingTime = Math.floor(remainingTime / 1000);

      const days = Math.floor(remainingTime / (24 * 60 * 60));
      remainingTime = remainingTime % (24 * 60 * 60);

      const hours = Math.floor(remainingTime / (60 * 60));
      remainingTime = remainingTime % (60 * 60);

      const minutes = Math.floor(remainingTime / 60);
      remainingTime = remainingTime % 60;

      const seconds = remainingTime;

      setTime({ days, hours, minutes, seconds });
    }, 1000);
  }, []);

  return (
    <section
      className="flex flex-col text-center items-center justify-center pt-32 bg-[#302949] min-h-screen bg-[url('/images/hero_bg_2.webp')] bg-cover bg-center bg-no-repeat"
      id="hero"
    >
      <div className="w-32 h-32 lg:w-56 lg:h-56">
        <Image src={Logo} alt="Deerhack logo" />
      </div>
      <h2 className="font-mont font-bold text-primary text-4xl lg:text-7xl">
        DeerHack 2023
      </h2>
      <span className="font-mont font-medium text-xl text-primary text-center mt-5">
        Powered by
      </span>
      <Image
        src="/images/sponsors/worldlink.svg"
        alt=""
        width={330}
        height={50}
        className="mt-5 w-48 lg:w-96"
      />
      <h4 className="font-poppins font-medium text-2xl lg:text-5xl mt-8 text-white">
        5th-7th May
      </h4>
      <div className="flex flex-row gap-2 justify-center font-mont text-4xl lg:text-7xl text-primary font-bold mt-10">
        <div className="flex flex-col gap-2 text-center">
          <span>{time.days}</span>
          <span className="text-sm lg:text-lg text-white">Days</span>
        </div>
        <span>:</span>
        <div className="flex flex-col gap-2 text-center">
          <span>{time.hours}</span>
          <span className="text-sm lg:text-lg text-white">Hours</span>
        </div>
        <span>:</span>
        <div className="flex flex-col gap-2 text-center">
          <span>{time.minutes}</span>
          <span className="text-sm lg:text-lg text-white">Minutes</span>
        </div>
        <span>:</span>
        <div className="flex flex-col gap-2 text-center">
          <span>{time.seconds}</span>
          <span className="text-sm lg:text-lg text-white">Seconds</span>
        </div>
      </div>

      <div className="mt-10">
        <div
          className="apply-button"
          data-hackathon-slug="deerhack"
          data-button-theme="light"
          style={{ height: "44px", width: "312px" }}
        ></div>
      </div>
      {/* <Link
        className="border-primary border-2 px-5 py-3 font-mont font-bold text-xl lg:text-3xl text-white mt-10 rounded-xl hover:bg-primary transition duration-200"
        href={"/register"}
      >
        Pre-Register
      </Link> */}

      <a href={discordUrl} className="my-10">
        <DiscordLogo />
      </a>
    </section>
  );
};

export default Hero;
