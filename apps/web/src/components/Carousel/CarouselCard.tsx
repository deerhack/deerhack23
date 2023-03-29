import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  link: string;
  img: string;
  name: string;
  role: string;
};

const CarouselCard = ({ link, img, name, role }: Props) => {
  return (
    <motion.div
      className="flex flex-col items-center my-6 "
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <a href={link} target="_blank" rel="noreferrer">
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
    </motion.div>
  );
};

export default CarouselCard;
