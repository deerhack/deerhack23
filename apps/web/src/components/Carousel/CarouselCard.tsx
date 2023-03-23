import Image from "next/image";
type Props = {
  link: string;
  img: string;
  name: string;
  role: string;
};

const CarouselCard = ({ link, img, name, role }: Props) => {
  return (
    <section className="flex flex-col items-center ">
      <a href={link}>
        <Image
          src={img}
          alt="judges image"
          className="rounded-full border-yellow-400 border-4"
          height={300}
          width={200}
        />
        <h3>{name}</h3>
        <p>{role}</p>
      </a>
    </section>
  );
};

export default CarouselCard;
