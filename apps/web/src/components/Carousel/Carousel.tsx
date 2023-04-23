import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CarouselCard from "./CarouselCard";
import clsx from "clsx";

type Props = {
  carouselCard: CarouselCard[];
};

const Carousel = ({ carouselCard }: Props) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
    customPaging: (i:number) => (
        <div
          className={clsx("w-3 h-3 border-2 border-primary rounded-xl slick-dot")}
        >
        </div>
      )
  };
  return (
    <div className="mx-auto flex flex-col text-center mt-8 lg:mt-12">
      <Slider {...settings}>
        {carouselCard.map((item) => {
          return (
            <CarouselCard
              key={item.link}
              link={item.link}
              img={item.img}
              name={item.name}
              role={item.role}
            />
          );
        })}
      </Slider>
    </div>
  );
};

export default Carousel;
