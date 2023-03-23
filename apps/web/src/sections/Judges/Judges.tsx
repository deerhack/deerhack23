import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carousel } from "@/components/Carousel";
type Props = {
  carouselCard: CarouselCard[];
};

const Judges = ({ carouselCard }: Props) => {
  return (
    <div className="bg-gradient-to-r from-[#100A28] to-[#4F3E93] py-24 px-10 text-white">
      <Carousel carouselCard={carouselCard} />
    </div>
  );
};

export default Judges;
