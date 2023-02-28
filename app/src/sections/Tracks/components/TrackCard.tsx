import Image from "next/image";

type Props = {
  logoSrc: string;
  title: string;
  description: string;
};

const TrackCard = ({ logoSrc, title, description }: Props) => {
  return (
    <div className="basis-5/12 flex-grow flex-shrink mx-auto">
      <div className="bg-gradient-to-b from-[#A5A7FF] via-[#8183DA] to-transparent rounded-3xl text-center max-w-sm px-12 py-24 mx-auto">
        <figure>
          <Image
            src={logoSrc}
            alt={""}
            width={100}
            height={100}
            className="object-contain mx-auto"
          />
          <figcaption className="font-mont text-primary font-bold text-2xl mt-5">
            {title}
          </figcaption>
        </figure>
        <p className="mt-8 text-medium font-poppins text-2xl text-white">
          {description}
        </p>
      </div>
    </div>
  );
};

export default TrackCard;
