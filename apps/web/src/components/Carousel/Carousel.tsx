import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CarouselCard from "./CarouselCard";

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
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <div className="mx-auto flex flex-col  text-center">
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
