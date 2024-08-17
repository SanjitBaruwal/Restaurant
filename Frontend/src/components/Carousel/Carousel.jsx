import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import data from "./carouseldata";
const CarouselImg = () => {
  const responsive = {
    extraLarge: {
      breakpoint: { max: 3000, min: 1280 },
      items: 4,
    },
    large: {
      breakpoint: { max: 1279, min: 1024 },
      items: 3,
    },
    medium: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
      partialVisibilityGutter: 0,
    },
    small: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
      partialVisibilityGutter: 0,
    },
  };

  return (
    <div className="px-[12.5%] mt-[80px] menu" id="carousel">
      <Carousel
        responsive={responsive}
        removeArrowOnDeviceType={["medium", "small"]}
        infinite={true}
        autoPlay={true}
      >
        {data.map((item) => (
          <div
            key={item.id}
            className="h-[350px] relative flex justify-center items-end bg-no-repeat bg-cover bg-center group rounded-[10px] cursor-pointer mx-3"
            style={{
              backgroundImage: `url(${item.background})`,
            }}
          >
            <div className="h-1/3 w-[88%] flex flex-col justify-start items-start space-y-2 py-3 opacity-5 group-hover:opacity-100 transition-opacity duration-300 relative z-10">
              <h1 className="text-white text-3xl leading-[30px] font-bold">
                {item.item.toUpperCase()}
              </h1>
              <p
                className="text-white text-md font-semibold"
                style={{ textTransform: "capitalize" }}
              >
                {item.description}
              </p>
            </div>
            <div className="group-hover:absolute inset-0 bg-gradient-to-b from-transparent to-black rounded-[10px] opacity-70" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselImg;
