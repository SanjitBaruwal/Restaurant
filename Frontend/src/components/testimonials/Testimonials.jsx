import { FaQuoteLeft } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import testimonial from "./testimonial";
import { useEffect, useState } from "react";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [key, setKey] = useState(0); // This state will help to re-render the progress bar on slide change

  const handleSlideChange = (currentIndex) => {
    setCurrentSlide(currentIndex);
    setKey((prevKey) => prevKey + 1); // Change key to reset the animation
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonial.length);
      setKey((prevKey) => prevKey + 1); // Change key to reset the animation
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const responsive = {
    large: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    medium: {
      breakpoint: { max: 1024, min: 768 },
      items: 1,
    },
    small: {
      breakpoint: { min: 0, max: 767 },
      items: 1,
    },
  };

  const Rating = ({ rating }) => (
    <div className="flex justify-center items-center">
      {[...Array(rating)].map((_, index) => (
        <AiFillStar key={index} size={24} color="#FF806E" />
      ))}
    </div>
  );

  return (
    <div className=" relative py-[110px] px-10 lg:px-[5%] xl:px-[12.5%] w-full flex justify-center bg-white">
      <div className="  flex flex-col items-center justify-center gap-4 w-full xs:px-0 sm:px-5 md:px-10 lg:px-0 lg:w-[50%]">
        <div>
          <FaQuoteLeft size={48} />
        </div>
        <div id="carousel" className="w-full testimonials z-10 ">
          <Carousel
            responsive={responsive}
            removeArrowOnDeviceType={["small"]}
            infinite
            autoPlay={3000}
            afterChange={handleSlideChange}
          >
            {testimonial.map((item) => (
              <div
                key={item.id}
                className=" flex flex-col items-center gap-8 py-4 px-16 cursor-pointer"
              >
                <div className="flex flex-col items-center justify-center gap-4">
                  <Rating rating={item.rating} />
                  <div className="text-center  ">{item.message}</div>
                </div>
                <h2 className="text-xl font-bold">-{item.name}</h2>
              </div>
            ))}
          </Carousel>
          <div className="carousel-progress-container flex md:hidden">
            {testimonial.map((_, index) => (
              <div
                key={`${index}-${key}`}
                className={`carousel-progress-bar ${
                  currentSlide === index ? "active" : ""
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
      <div className=" xs:hidden md:flex absolute bottom-0 right-0 h-[65%] aspect-square z0">
        <img
          src="/pizza2.png"
          alt="pizza"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Testimonials;
